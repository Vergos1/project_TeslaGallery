import React from 'react'
import styles from './app-container.module.scss'

interface AppContainerProps {
  children: React.ReactNode
}

const { container } = styles

export const AppContainer = ({ children }: AppContainerProps) => {
  return <div className={container}>{children}</div>
}
