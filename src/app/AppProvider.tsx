import { TeslaSwiperProvider } from '@core/contexts/swiper-context'
import { BrowserRouter } from 'react-router-dom'
import 'swiper/css'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <TeslaSwiperProvider>{children}</TeslaSwiperProvider>
    </BrowserRouter>
  )
}
