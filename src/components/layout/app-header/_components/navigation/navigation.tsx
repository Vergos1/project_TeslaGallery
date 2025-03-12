import React from 'react'

import { NavigationButton } from './navigation-button/navigation-button'
import styles from './navigation.module.scss'

export interface NavigationProps {
  navigationList: { name: string }[]
}

const { nav, list } = styles

export const Navigation = ({ navigationList }: NavigationProps) => {
  return (
    <nav className={nav}>
      <ul className={list}>
        {navigationList.map(({ name }) => {
          return <NavigationButton key={name} name={name} />
        })}
      </ul>
    </nav>
  )
}
