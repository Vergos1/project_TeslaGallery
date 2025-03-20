import { createContext, useContext, useState } from 'react'
import { Swiper as SwiperClass } from 'swiper'

interface CarouselContextType {
  selectedCar: number
  goToSlide: (id: number) => void
  setSwiperInstance: (swiper: SwiperClass) => void
}

export const CarouselContext = createContext<CarouselContextType | null>(null)

export const TeslaSwiperProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [selectedCar, setSelectedCar] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null)

  const goToSlide = (id: number) => {
    setSelectedCar(id)
    if (swiperInstance) {
      const slideIndex = swiperInstance.slides.findIndex(
        slide => slide.getAttribute('data-id') === String(id)
      )
      if (slideIndex !== -1) {
        swiperInstance.slideTo(slideIndex)
      }
    }
  }

  return (
    <CarouselContext.Provider
      value={{ selectedCar, goToSlide, setSwiperInstance }}
    >
      {children}
    </CarouselContext.Provider>
  )
}

export const useTeslaSwiper = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useTeslaSwiper must be used within a TeslaSwiperProvider')
  }
  return context
}
