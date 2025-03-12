import { AppContainer } from '@components/layout'
import styles from './not-found.module.scss'

const { container, title } = styles

const NotFoundPage = () => {
  return (
    <AppContainer className={container}>
      <h1 className={title}>Not found page</h1>
    </AppContainer>
  )
}

export default NotFoundPage
