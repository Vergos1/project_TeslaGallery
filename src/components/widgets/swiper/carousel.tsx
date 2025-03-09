import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styles from './carousel.module.scss'

const { carousel, view, wrapper, block } = styles

export type Item = {
  id: number
  children: React.ReactNode
}

export interface CarouselProps {
  items: Item[]
  itemSizeInRem: number
  itemGapInRem?: number
}

export const Carousel = ({ items, itemSizeInRem, itemGapInRem }: CarouselProps) => {
  const incrementId = React.useRef(0)
  const carouselRef = React.useRef<HTMLDivElement | null>(null)

  const [[selectedIndex, direction], setSelectedIndex] = React.useState([0, 0])
  const [carouselViewLength, setCarouselViewLength] = React.useState(0)

  React.useEffect(() => {
    if (carouselRef.current !== null) {
      setCarouselViewLength(calculateCarouselViewLength())
    }

    const resizeListener = () => {
      if (carouselRef.current !== null) {
        setCarouselViewLength(calculateCarouselViewLength())
      }
    }
    window.addEventListener('resize', resizeListener)

    return () => window.removeEventListener('resize', resizeListener)
  }, [itemSizeInRem, itemGapInRem])

  const { inViewItems, prevIndex, nextIndex } = React.useMemo(
    () => buildCarouselViews(items, carouselViewLength, selectedIndex),
    [items, carouselViewLength, selectedIndex]
  )

  const paginate = React.useCallback(
    (sign: number) => {
      incrementId.current = incrementId.current + 1
      setSelectedIndex([sign < 0 ? nextIndex : prevIndex, sign])
    },
    [prevIndex, nextIndex]
  )

  return (
    <div ref={carouselRef} className={carousel}>
      <div className={wrapper}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            style={{ gap: `${itemGapInRem}rem` }}
            key={`${selectedIndex}-${incrementId}`}
            className={view}
            drag='x'
            variants={variants}
            custom={direction}
            initial='enter'
            animate='center'
            exit='exit'
            dragElastic={1}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_evnent, info) => paginate(Math.sign(info.offset.x))}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {inViewItems.map(item => (
              <div className={block} key={`${item.id}${item.duplicate !== undefined ? `-${item.duplicate}` : ''}`}>
                {item.children}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const variants = {
  enter: (direction: number) => {
    console.log(direction)
    return {
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    }
  },
  center: {
    x: 0,
    zIndex: 1,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      zIndex: 0,
      opacity: 0
    }
  }
}

const calculateCarouselViewLength = (): number => 1 // Всегда 1 элемент

const buildCarouselViews = (items: Item[], carouselViewLength: number, selectedIndex: number) => {
  if (selectedIndex >= items.length || selectedIndex < 0) {
    throw new Error('Something is very wrong')
  }

  let itemArray = []
  let itemIndex = selectedIndex
  let duplicateCounter = 0

  while (itemArray.length < carouselViewLength) {
    if (itemIndex > items.length - 1) {
      itemIndex = 0
      duplicateCounter += 1
    }
    itemArray.push({
      ...items[itemIndex],
      duplicate: duplicateCounter || undefined
    })
    itemIndex++
  }

  const recursiveFn = (fromIndex: number, acc: number, direction: 'prev' | 'next'): number => {
    let index = 0
    if (direction === 'next') {
      index = fromIndex + acc
      if (index > items.length - 1) {
        const rest = index - items.length
        return recursiveFn(0, rest, direction)
      }
    }
    if (direction === 'prev') {
      index = fromIndex - acc

      if (Math.sign(index) === -1) {
        return recursiveFn(items.length, Math.abs(index), direction)
      }
    }

    return index
  }

  const nextIndex = recursiveFn(selectedIndex, carouselViewLength, 'next')
  const prevIndex = recursiveFn(selectedIndex, carouselViewLength, 'prev')

  return { inViewItems: itemArray, nextIndex, prevIndex }
}
