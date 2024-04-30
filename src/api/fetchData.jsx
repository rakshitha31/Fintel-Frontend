import React, { useState } from 'react';
import { statisticsChartsNews, statisticsChartsSocial, pieCharts } from '@/data';
import { GaugeMeter } from '@/widgets/charts';

// Fetch data from an API
export const fetchData = async (url) => {
  const response = await fetch(url);
  console.log(response)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

// Fetch data for charts
export const fetchChartData = async (stock_ticker, start_date, end_date) => {
  console.log(start_date, end_date)
  const jsonAPI = `http://10.0.0.203:8082/v0/sentiment/stock/${stock_ticker}?time_start=${start_date}&time_end=${end_date}`;

  const data = await fetchData(jsonAPI);
  const chartData = cleanData(data);
  let charts = null;
  let newsCharts=null
  let socialCharts=null
  let gaugeChart = null;
  if(chartData){
    charts ={
      newsCharts : statisticsChartsNews(chartData),
      socialCharts : statisticsChartsSocial(chartData),
      pieCharts : pieCharts(chartData),
      gaugeChart : [chartData.newsCorrelation, chartData.socialCorrelation]
    }
  }
  return charts;
}

const cleanData = (data) => {

  // news sentiment data
  const newsRelationship = data.data.relationships.news_sentiment.data.map((item) => item.id);
  const socialRelationship = data.data.relationships.social_sentiment.data.map((item) => item.id);
  const newsCorrelation = data.data.attributes.news_correlation;
  const socialCorrelation = data.data.attributes.social_correlation;
  const iciData = data.included;
  // filter news ici data from iciData where id is equal to newsRelationship id and type = sentiment
  const newsIciData = iciData.filter((item) => newsRelationship.includes(item.id) && item.type === 'sentiments');
  // make two arrays of newsICIData.attributes.daily_ici and date
  const newsIciDataSorted = newsIciData.sort((a, b) => new Date(a.attributes.date) - new Date(b.attributes.date));
  const newsIci = newsIciDataSorted.map((item) => item.attributes.daily_ici);
  const newsDate = newsIciDataSorted.map((item) => new Date(item.attributes.date).toLocaleDateString('en-CA'));
  const newsVolume = newsIciDataSorted.map((item) => item.attributes.volume);
  // add all the positive_count values for all the newsIciData
  const newsPositive = newsIciData.map((item) => item.attributes.positive_count).reduce((a, b) => a + b, 0);
  const newsNegative = newsIciData.map((item) => item.attributes.negative_count).reduce((a, b) => a + b, 0);
  const newsNeutral = newsIciData.map((item) => item.attributes.neutral_count).reduce((a, b) => a + b, 0);
 

  // filter social ici data from iciData where id is equal to socialRelationship id
  const socialIciData = iciData.filter((item) => socialRelationship.includes(item.id)  && item.type === 'sentiments');
  const socialIciDataSorted = socialIciData.sort((a, b) => new Date(a.attributes.date) - new Date(b.attributes.date));
  const socialIci = socialIciDataSorted.map((item) => item.attributes.daily_ici);
  const socialDate = socialIciDataSorted.map((item) => new Date(item.attributes.date).toLocaleDateString('en-CA'));
  const socialVolume = socialIciDataSorted.map((item) => item.attributes.volume);
  const socialPositive = socialIciData.map((item) => item.attributes.positive_count).reduce((a, b) => a + b, 0);
  const socialNegative = socialIciData.map((item) => item.attributes.negative_count).reduce((a, b) => a + b, 0);
  const socialNeutral = socialIciData.map((item) => item.attributes.neutral_count).reduce((a, b) => a + b, 0);

  console.log(newsIciData);

  return {
    newsIci: newsIci,
    newsDate: newsDate,
    socialIci: socialIci,
    socialDate: socialDate,
    newsVolume: newsVolume,
    socialVolume: socialVolume,
    newsCorrelation: newsCorrelation,
    socialCorrelation: socialCorrelation,
    newsPositive: newsPositive,
    newsNegative: newsNegative,
    newsNeutral: newsNeutral,
    socialPositive: socialPositive,
    socialNegative: socialNegative,
    socialNeutral: socialNeutral
  }

};
