import { AppContainer } from '@components/layout'
import { TeslaSwiper } from '@components/widgets'
import { TeslaModelNamesList } from '@core/constants/mock-data.constants'
import React from 'react'
import styles from './home.module.scss'

const { container } = styles

const HomePage = () => {
  return (
    <AppContainer className={container}>
      <TeslaSwiper data={TeslaModelNamesList} />
    </AppContainer>
  )
}
export default HomePage
