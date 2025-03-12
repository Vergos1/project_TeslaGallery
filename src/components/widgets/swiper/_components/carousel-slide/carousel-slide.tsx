import { TeslaModel } from '@core/types'
import classNames from 'classnames'
import styles from './carousel-slide.module.scss'

interface CarouselSlideProps {
  src: string
  name: TeslaModel
  color: string
}

const { slide, image, backdropText } = styles

export const CarouselSlide = ({ src, name, color }: CarouselSlideProps) => {
  return (
    <div className={slide}>
      <h2 className={classNames(backdropText, styles[color])}>{name}</h2>
      <img draggable='false' src={src} className={image} alt={name} />
    </div>
  )
}
