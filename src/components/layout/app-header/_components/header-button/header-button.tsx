import React from 'react'
import styles from './header-button.module.scss'

export const HeaderButtons = () => {
  return (
    <div className={styles.headerButtons}>
      <button className={`${styles.button} ${styles.searchButton}`}>
        <img className={styles.icon} src='/public/search.svg' alt='' />
        <span>Search</span>
      </button>

      <button className={styles.button}>
        <img className={styles.icon} src='/public/user.svg' alt='' />
      </button>
      <button className={styles.button}>
        <img className={styles.icon} src='/public/menu.svg' alt='' />
      </button>
    </div>
  )
}
