import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesEnum } from '../core/types/routes'
import AppLayout from './AppLayout'

const HomePage = lazy(() => import('../pages/home/home'))

const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path={AppRoutesEnum.Home} element={<AppLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={AppRoutesEnum.NotFound} element={<HomePage />} /> */}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRouter
