import { AppContainer } from '@components/layout'
import { Carousel } from '@components/widgets'
import { CarouselSlide } from '@components/widgets/swiper/_components/carousel-slide/carousel-slide'
import { teslaModelsList } from '@core/constants/mock-data.constants'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <AppContainer>
      <Carousel
        itemGapInRem={1}
        itemSizeInRem={10}
        items={teslaModelsList.map(({ image, name, color }, index) => ({
          id: index,
          children: <CarouselSlide color={color} name={name} src={image} />
        }))}
      />
    </AppContainer>
  )
}
export default HomePage
