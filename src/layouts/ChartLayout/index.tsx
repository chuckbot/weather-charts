import { IChartLayout } from './models'
import {
  MainLayoutContainer
} from './styles'

export const ChartLayout = ({ children }: IChartLayout) => {
  return (
    <MainLayoutContainer>
      { children }
    </MainLayoutContainer>
  )
}