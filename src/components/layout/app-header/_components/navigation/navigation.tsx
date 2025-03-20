import { useTeslaSwiper } from '@core/contexts/swiper-context'
import { NavigationButton } from './navigation-button/navigation-button'
import styles from './navigation.module.scss'

export interface NavigationProps {
  navigationList: { id: number; name: string }[]
}

const { nav, list } = styles

export const Navigation = ({ navigationList }: NavigationProps) => {
  return (
    <nav className={nav}>
      <ul className={list}>
        {navigationList.map(({ name, id }) => {
          return <NavigationButton id={id} key={name} name={name} />
        })}
      </ul>
    </nav>
  )
}
