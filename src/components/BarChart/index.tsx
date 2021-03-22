import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart as BC,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Days } from "../../views/Home/models";
import { IBarChart } from "./models";
import { MainChartWrapper } from "./styles";

export const BarChart = ({ plot }: IBarChart) => {
  const [localPlot, setLocalPlot] = useState<Days[]>([]);

  useEffect(() => {
    setLocalPlot(
      plot.map((singlePlot) => {
        return {
          ...singlePlot,
          name: `Day ${singlePlot.day}`,
        };
      })
    );
  }, [plot]);
  return (
    <MainChartWrapper>
      <div>
        <BC
          width={600}
          height={250}
          data={localPlot}
          margin={{
            right: 50,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />

          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="amount" fill="#00e908" background={{ fill: "#eee" }} />
        </BC>
      </div>
    </MainChartWrapper>
  );
};
