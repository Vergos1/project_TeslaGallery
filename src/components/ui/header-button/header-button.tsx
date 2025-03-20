import React from 'react'
import styles from './header-button.module.scss'
interface HeaderButtonsProps {
  isOpen: boolean
  toggleBurger: () => void
}
const BUTTONS = [{ src: '/public/user.svg', alt: 'User' }]
export const HeaderButtons: React.FC<HeaderButtonsProps> = ({ isOpen, toggleBurger }) => {
  return (
    <div className={styles.headerButtons}>
      <button className={`${styles.button} ${styles.searchButton}`}>
        <img className={styles.icon} src='/public/search.svg' alt='' />
        <span>Search</span>
      </button>

      {BUTTONS.map(({ src, alt }, index) => (
        <button key={index} className={styles.button}>
          <img className={styles.icon} src={src} alt={alt} />
        </button>
      ))}
      <button onClick={toggleBurger} className={styles.burgerButton}>
        <img className={styles.icon} src={isOpen ? '/public/menu-vertically.svg' : '/public/menu.svg'} alt='Menu' />
      </button>
    </div>
  )
}
