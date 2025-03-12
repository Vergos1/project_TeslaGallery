import classNames from 'classnames'
import React from 'react'
import styles from './app-container.module.scss'

interface AppContainerProps {
  className?: string
  children: React.ReactNode
}

const { container } = styles

export const AppContainer = ({ children, className }: AppContainerProps) => {
  return <div className={classNames(container, className)}>{children}</div>
}
