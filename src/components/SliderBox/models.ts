import { DataResponse } from "../../views/Home/models";
import { DataPortion } from "../TimeSerieChart/models";

export interface SliderValue {
  press: number
  temp: number
}

export interface ISliderBox {
  data: DataResponse[]
  onUpdateValue: (newValue: DataPortion[]) => void
}