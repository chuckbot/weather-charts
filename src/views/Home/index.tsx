import { BarChart } from '../../components/BarChart'
import { ChartLayout } from '../../layouts/ChartLayout'
import { MainContainer } from './styles'
import { TimeSerieChart } from '../../components/TimeSerieChart'

export const MainLayout = () => {
  
  return (
    <MainContainer>
      <h1 className={'layout-title'}> Weather Charts </h1>
      
      <div className={'chart-container'}>
        <ChartLayout>
          <BarChart />
        </ChartLayout>

        <ChartLayout>
          <TimeSerieChart />
        </ChartLayout>
      </div>
    </MainContainer>
  )

}
