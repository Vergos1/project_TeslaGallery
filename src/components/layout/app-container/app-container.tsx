import classNames from 'classnames'
import React from 'react'
import styles from './app-container.module.scss'

interface AppContainerProps {
  className?: string
  children: React.ReactNode
  variant?: 'base' | 'header'
}

const { container } = styles

export const AppContainer = ({
  children,
  className,
  variant = 'base'
}: AppContainerProps) => {
  return (
    <div className={classNames(container, styles[variant], className)}>
      {children}
    </div>
  )
}
