import TeslaLogo from '@assets/images/tesla-logo.svg'
import { NAVIGATION } from '@core/constants/navigation.constants'
import React, { useState } from 'react'
import { HeaderButtons } from '../../ui/header-button/header-button'
import { AppContainer } from '../app-container'
import { Navigation } from './_components/navigation/navigation'
import styles from './app-header.module.scss'

const { header, container, logo, mobileMenu } = styles

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBurger = () => setIsOpen(!isOpen)

  return (
    <AppContainer variant='header'>
      <header className={header}>
        <img src={TeslaLogo} alt='logo' className={logo} />
        <div className={styles.desktopNav}>
          <Navigation navigationList={NAVIGATION} />
        </div>

        <HeaderButtons isOpen={isOpen} toggleBurger={toggleBurger} />

        {isOpen && (
          <div className={mobileMenu}>
            <Navigation navigationList={NAVIGATION} />
          </div>
        )}
      </header>
    </AppContainer>
  )
}
