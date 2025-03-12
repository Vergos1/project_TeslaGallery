import { NAVIGATION } from '@core/constants/navigation.constants'
import React from 'react'
import { HeaderButtons } from './_components/header-button/header-button'
import { Navigation } from './_components/navigation/navigation'
import styles from './app-header.module.scss'

const { header, container, logo } = styles

export const AppHeader = () => {
  return (
    <header className={header}>
      <div className={container}>
        <img src='/public/tesla-logo.svg' alt='logo' className={logo} />

        <Navigation navigationList={NAVIGATION} />
        <HeaderButtons></HeaderButtons>
      </div>
    </header>
  )
}
