import React from 'react'
import styles from './header-button.module.scss'

const BUTTONS = [
  { src: '/public/user.svg', alt: 'User' },
  { src: '/public/menu.svg', alt: 'Menu' }
]
export const HeaderButtons = () => {
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
    </div>
  )
}
