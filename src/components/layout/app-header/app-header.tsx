import { NAVIGATION } from '@core/constants/navigation.constants'
import React from 'react'
import styles from './app-header.module.scss'
import { Navigation } from './navigation/navigation'
import { HeaderButtons } from '../app-header/header-button/header-button'

const { header, container, logo } = styles

export const AppHeader = () => {
  return (
    <header className={header}>
      <div className={container}>
        <h1 className={logo}>
          <img src='/public/tesla-logo.svg' alt='logo' />
        </h1>
        <Navigation navigationList={NAVIGATION} />
        <HeaderButtons></HeaderButtons>
      </div>
    </header>
  )
}
