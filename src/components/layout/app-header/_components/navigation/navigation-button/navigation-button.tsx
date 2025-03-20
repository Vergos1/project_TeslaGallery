import { useTeslaSwiper } from '@core/contexts/swiper-context'
import classNames from 'classnames'
import React from 'react'
import styles from './navigation-button.module.scss'

export interface NavigationButtonProps {
  id: number
  name: string
}

const { item, button, buttonActive } = styles

export const NavigationButton = ({ id, name }: NavigationButtonProps) => {
  const { selectedCar, goToSlide } = useTeslaSwiper()

  const isActive = selectedCar === id

  return (
    <li className={item}>
      <button
        type='button'
        className={classNames(button, isActive && buttonActive)}
        onClick={() => goToSlide(id)}
      >
        {name}
      </button>
    </li>
  )
}
