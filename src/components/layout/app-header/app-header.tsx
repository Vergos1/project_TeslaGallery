import { NAVIGATION } from '@core/constants/navigation.constants'
import React from 'react'
import { HeaderButtons } from '../../ui/header-button/header-button'
import { Navigation } from './_components/navigation/navigation'
import styles from './app-header.module.scss'
import TeslaLogo from '@assets/images/tesla-logo.svg'

const { header, container, logo } = styles

export const AppHeader = () => {
  return (
    <header className={header}>
      <div className={container}>
        <img src={TeslaLogo} alt='logo' className={logo} />

        <Navigation navigationList={NAVIGATION} />
        <HeaderButtons />
      </div>
    </header>
  )
}
