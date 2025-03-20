import { useTeslaSwiper } from '@core/contexts/swiper-context'
import { TeslaModel } from '@core/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TeslaSwiperSlide } from './_components/tesla-swiper-slide/tesla-swiper-slide'
import styles from './tesla-swiper.module.scss'

const { container } = styles

type TeslaSwiperProps = {
  data: TeslaModel[]
}

export const TeslaSwiper = ({ data }: TeslaSwiperProps) => {
  const { goToSlide, setSwiperInstance } = useTeslaSwiper()

  return (
    <div className={container}>
      <Swiper
        centeredSlides
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        onSlideChange={swiper => goToSlide(data[swiper.activeIndex].id)}
      >
        {data.map(({ image, name, color, id }) => (
          <SwiperSlide key={id} data-id={id}>
            <TeslaSwiperSlide src={image} name={name} color={color} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
