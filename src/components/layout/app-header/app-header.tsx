import { NAVIGATION } from '@core/constants/navigation.constants'
import React, { useState } from 'react'
import { HeaderButtons } from '../../ui/header-button/header-button'
import { Navigation } from './_components/navigation/navigation'
import styles from './app-header.module.scss'
import TeslaLogo from '@assets/images/tesla-logo.svg'

const { header, container, logo, mobileNav, mobileMenu, desktopNav } = styles

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleBurger = () => setIsOpen(!isOpen)
  return (
    <header className={header}>
      <div className={container}>
        <img src={TeslaLogo} alt='logo' className={logo} />
        <div className={styles.desktopNav}>
          <Navigation navigationList={NAVIGATION} />
        </div>

        <HeaderButtons isOpen={isOpen} toggleBurger={toggleBurger} />
      </div>
      {isOpen && (
        <div className={mobileMenu}>
          <Navigation navigationList={NAVIGATION} />
        </div>
      )}
    </header>
  )
}
