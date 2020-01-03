import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from '../config/theme'
import App from './App'
import NavigationBar from './NavigationBar'

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <App />
    </ThemeProvider>
  )
}

export default Layout
