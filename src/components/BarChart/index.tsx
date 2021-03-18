import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";
import { DataResponse } from "./models";
import { fetchData } from "./services";
import { MainChartWrapper } from "./styles";

export const BarChart = () => {
  const [data, setData] = useState<DataResponse[]>([]);
  const getData = async () => {
    await fetchData()
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("error: ", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainChartWrapper>
      <div onClick={() => console.log(data)}>
        iuytremti7uy
        <Slider defaultValue={1010} min={970} max={1030} step={1} />
      </div>
    </MainChartWrapper>
  );
};
