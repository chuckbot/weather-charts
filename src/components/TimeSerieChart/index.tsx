import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ITimeSerieChart } from "./models";
import { MainTimeSeriesChart } from "./styles";

export const TimeSerieChart = ({ plot }: ITimeSerieChart) => {
  return (
    <MainTimeSeriesChart>
      <div>
        <LineChart
          width={600}
          height={250}
          data={plot}
          margin={{
            right: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="ub"
            stroke="#e40f0f"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="m" stroke="#008834" />
          <Line type="monotone" dataKey="lb" stroke="#d34a00" />
        </LineChart>
      </div>
    </MainTimeSeriesChart>
  );
};
