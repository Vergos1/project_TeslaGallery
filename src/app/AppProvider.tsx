import { BrowserRouter } from 'react-router-dom'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
