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
        <img src='/public/tesla-logo.svg' alt='logo' className={logo} />

        <Navigation navigationList={NAVIGATION} />
        <HeaderButtons />
      </div>
    </header>
  )
}
