import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './../components/app-header/app-header'

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default AppLayout
