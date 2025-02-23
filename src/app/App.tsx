import React from 'react'
import '../assets/styles/index.scss'
import { AppProvider } from './AppProvider'
import AppRouter from './AppRouter'

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}
