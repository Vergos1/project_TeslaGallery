import { AppHeader } from '@components/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main className='app'>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
