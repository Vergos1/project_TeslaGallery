import { NAVIGATION } from '@core/constants/navigation.constants'
import React from 'react'
import styles from './app-header.module.scss'
import { Navigation } from './navigation/navigation'

const { header, container, logo } = styles

export const AppHeader = () => {
  return (
    <header className={header}>
      <div className={container}>
        <h1 className={logo}>TESLA GALLERY</h1>
        <Navigation navigationList={NAVIGATION} />
      </div>
    </header>
  )
}
