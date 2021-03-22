import { DataResponse } from "../../views/Home/models";

export interface ITimeSerieChart {
  plot: DataPortion[]
}

export interface SliderValue {
  press: number
  temp: number
}

export interface DataPortion {
  name: string
  lb: number
  m: number
  ub: number
}