import { TeslaModelName } from '@core/types'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { SwiperSlide } from 'swiper/react'
import styles from './tesla-swiper-slide.module.scss'

interface TeslaSwiperSlideProps {
  src: string
  name: TeslaModelName
  color: string
}

const { slide, image, backdropText } = styles

export const TeslaSwiperSlide = ({
  src,
  name,
  color
}: TeslaSwiperSlideProps) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      className={slide}
    >
      <h2 className={classNames(backdropText, styles[color])}>{name}</h2>
      <img draggable='false' src={src} className={image} alt={name} />
    </motion.div>
  )
}
