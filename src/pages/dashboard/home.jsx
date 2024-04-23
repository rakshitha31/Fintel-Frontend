import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard, StockSentimentCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  statisticsChartsNews,
  projectsTableData,
  ordersOverviewData
} from "@/data";
import {
  Sidenav,
  SearchCard
} from "@/widgets/layout";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 flex justify-center items-center gap-x-4">
        <SearchCard />
      </div>
      <Tabs>
        <TabList>
          <Tab>Stock Price Synergy</Tab>
          <Tab>News</Tab>
          <Tab>Social Media</Tab>
        </TabList>

        <TabPanel>
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {/* ... StatisticsCard code ... */}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="md:w-100">
            <h1 className="text-3xl text-black-600 font-bold my-4">News</h1>
            <div className="mb-6 grid grid-cols-2 gap-4">
              {statisticsChartsNews.map((props) => (
                <StatisticsChart
                  key={props.title}
                  {...props}
                  footer={
                    <Typography
                      variant="small"
                      className="flex items-center font-normal text-blue-gray-600"
                    >
                      <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                      &nbsp;{props.footer}
                    </Typography>
                  }
                />
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="md:w-100">
            <h1 className="text-3xl text-black-600 font-bold my-4">Social Media</h1>
            <div className="mb-6 grid grid-cols-2 gap-4 ">
            {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Home;