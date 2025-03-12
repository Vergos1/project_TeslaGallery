import { HomePage, NotFoundPage } from 'pages'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesEnum } from '../core/types/routes'
import AppLayout from './AppLayout'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path={AppRoutesEnum.Home} element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path={AppRoutesEnum.NotFound} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
