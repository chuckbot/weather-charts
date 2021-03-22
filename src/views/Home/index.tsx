import { BarChart } from "../../components/BarChart";
import { ChartLayout } from "../../layouts/ChartLayout";
import { MainContainer } from "./styles";
import { TimeSerieChart } from "../../components/TimeSerieChart";
import React, { useEffect, useState } from "react";
import { fetchData } from "./services";
import { DataResponse } from "./models";
import { SliderBox } from "../../components/SliderBox";
import { DataPortion } from "../../components/TimeSerieChart/models";
import { ControllerSnapshot } from "../../renders/TemperatureBackground/models";
import { TemperatureBackground } from "../../renders/TemperatureBackground";

export const MainLayout = () => {
  const [data, setData] = useState<DataResponse[]>([]);
  const [plot, setPlot] = useState<DataPortion[]>([]);

  const [graphicDifferencial, setGraphicDifferencial] = useState(10);
  const [
    graphicControllers,
    setGraphicControllers,
  ] = useState<ControllerSnapshot>({} as ControllerSnapshot);

  useEffect(() => {
    console.log(
      "%cDiferencial: ",
      "color: lightgreen; font-weight: bolder",
      graphicDifferencial
    );

    const rayleighDiff = parseFloat(
      (
        graphicDifferencial * (graphicDifferencial <= 20 ? 0.095 : 0.085)
      ).toFixed(3)
    );

    const newControllersSnapshot: ControllerSnapshot = {
      distance: 100,
      turbidity: 1.5, //parseFloat((4.5 - parseFloat(((graphicDifferencial * 0.3)).toFixed(2))).toFixed(2))
      rayleigh: parseFloat(
        (rayleighDiff - (rayleighDiff <= 2 ? 0.85 : 0)).toFixed(3)
      ),
      mieCoefficient: parseFloat((graphicDifferencial * 0.0016).toFixed(3)),
      mieDirectionalG: 0.9,
      inclination: parseFloat(
        (
          0.54 - parseFloat((graphicDifferencial * 0.0024 - 0.04).toFixed(2))
        ).toFixed(2)
      ),
    };
    setGraphicControllers(newControllersSnapshot);
    console.log(newControllersSnapshot);
  }, [graphicDifferencial]);

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
              onChangeTemperature={(newValue) =>
                setGraphicDifferencial(newValue)
              }
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

      <TemperatureBackground controllerSnapshot={graphicControllers} />
    </MainContainer>
  );
};
