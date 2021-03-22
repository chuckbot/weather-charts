import React, { useEffect, useState } from "react";
import { Slider } from "../Slider";
import { DataPortion } from "../TimeSerieChart/models";
import { ISliderBox, SliderValue } from "./models";
import { MainSliderWrapper } from "./styles";

export const SliderBox = ({
  data,
  onUpdateValue,
  onChangeTemperature,
}: ISliderBox) => {
  const [sliderValue, setSliderValue] = useState<SliderValue>({
    press: 970,
    temp: 10,
  });

  const [localTimeOut, setLocalTimeOut] = useState<any>();

  /*
   *  This hook observes changes in sliderValue, iterates over the service response
   *  and builds the array of data to be plotted.
   */

  useEffect(() => {
    localTimeOut && setLocalTimeOut(clearTimeout(localTimeOut));
    setLocalTimeOut(
      setTimeout(() => {
        updatePlot();
      }, 1000)
    );
  }, [sliderValue, data]);

  const updatePlot = () => {
    if (data.length > 0) {
      const dataPortion: DataPortion[] = data[0].days.map((singleDay) => {
        const lineArray: number[] = functionchanceOfRain(
          sliderValue.press,
          sliderValue.temp,
          singleDay.amount
        );
        return {
          name: `Day ${singleDay.day}`,
          lb: lineArray[0],
          m: lineArray[1],
          ub: lineArray[2],
        };
      });
      onUpdateValue(dataPortion);
    }
  };

  const functionchanceOfRain = (
    pressure: number,
    temperature: number,
    amount: number
  ) => {
    var score =
      Math.log(amount + 1) *
      Math.log(pressure - 929) *
      Math.log(temperature - 9);
    var mean = Math.min(Math.max(score, 0), 100);
    var upper_bound = Math.min(1.5 * mean, 100);
    var lower_bound = Math.max(0.5 * mean, 0);

    return [
      parseFloat(lower_bound.toFixed(2)),
      parseFloat(mean.toFixed(2)),
      parseFloat(upper_bound.toFixed(2)),
    ];
  };

  return (
    <MainSliderWrapper>
      <Slider
        label={"Pressure"}
        onChangeValue={(value) => {
          setSliderValue({ ...sliderValue, press: value });
        }}
        defaultValue={sliderValue.press}
        min={970}
        max={1030}
        step={1}
      />
      <Slider
        label={"Temperature"}
        onChangeValue={(value) => {
          setSliderValue({ ...sliderValue, temp: value });
          onChangeTemperature(value);
        }}
        defaultValue={sliderValue.temp}
        min={10}
        max={35}
        step={1}
      />
    </MainSliderWrapper>
  );
};
