import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "ICI",
      data: [0.5, -0.2, 0.6, 0.7, 0.1, -0.3, 0.02, 0.4, 0.9],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr-01",
        "Apr-02",
        "Apr-03",
        "Apr-04",
        "Apr-05",
        "Apr-06",
        "Apr-07",
        "Apr-08",
        "Apr-09",
      ],
    },
  },
};

// pie chart for sentiment
const completedTasksChart = {
  type: "pie",
  height: 220,
  series: [50, 40],
  options: {
    ...chartsConfig,
    labels: ["Bullish", "Bearish"],
    colors: ["#388e3c", "#f44336"],
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Chatter Volume",
    description: "Number of posts per day",
    footer: "campaign sent 2 days ago",
    chart: websiteViewsChart,
  },
  {
    color: "white",
    title: "Daily Sentiment Synergy for AAPL",
    description: "ICI Indicates the sentiment of the stock",
    footer: "updated 4 min ago",
    chart: dailySalesChart,
  },
  {
    color: "white",
    title: "Positive Vs Negative Sentiment",
    description: "Number of positive and negative sentiment",
    footer: "just updated",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
