import { AppContainer } from '@components/layout'
import TeslaLogo from '@icons/tesla-logo.svg'
import styles from './preloader.module.scss'

const { container, preloader, logo } = styles
export const Preloader = () => {
  return (
    <AppContainer className={container}>
      <div className={preloader}>
        <img className={logo} src={TeslaLogo} alt='tesla' />
      </div>
    </AppContainer>
  )
}
