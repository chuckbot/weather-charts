import { BarChart } from "../../components/BarChart";
import { ChartLayout } from "../../layouts/ChartLayout";
import { MainContainer } from "./styles";
import { TimeSerieChart } from "../../components/TimeSerieChart";
import { useEffect, useState } from "react";
import { fetchData } from "./services";
import { DataResponse } from "./models";
import { SliderBox } from "../../components/SliderBox";
import { DataPortion } from "../../components/TimeSerieChart/models";

export const MainLayout = () => {
  const [data, setData] = useState<DataResponse[]>([]);
  const [plot, setPlot] = useState<DataPortion[]>([]);

  const getData = async () => {
    await fetchData()
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log("error: ", err));
  };

  /**
   * Receives data from the service response
   */

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainContainer>
      <div className={"chart-container"}>
        <div className={"item-a"}>
          <ChartLayout>
            <SliderBox
              data={data}
              onUpdateValue={(newValue) => setPlot(newValue)}
            />
          </ChartLayout>
        </div>

        <div className={"item-b"}>
          <ChartLayout>
            <TimeSerieChart plot={plot} />
          </ChartLayout>
        </div>

        <div className={"item-c"}>
          <ChartLayout>
            <BarChart plot={data.length > 0 ? data[0].days : []} />
          </ChartLayout>
        </div>
      </div>
    </MainContainer>
  );
};
