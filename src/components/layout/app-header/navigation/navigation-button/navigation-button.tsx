import React from 'react'
import styles from './navigation-button.module.scss'

export interface NavigationButtonProps {
  name: string
}

const { item, button } = styles

export const NavigationButton = ({ name }: NavigationButtonProps) => {
  return (
    <li className={item}>
      <button className={button}>{name}</button>
    </li>
  )
}
