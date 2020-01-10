import React from 'react'
import { ThemeProvider, Paper, makeStyles } from '@material-ui/core'
import theme from '../config/theme'
import App from './App'
import NavigationBar from './NavigationBar'
import AppDrawer from './AppDrawer'
import { BrowserRouter as Router } from 'react-router-dom'
import { MIN_WIDTH as minWidth } from '../config/constants'
import isMobile from 'is-mobile'

const chromeAddressBarHeight = 56
const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex', 
    height: `calc(100vh - 48px - ${isMobile() ? chromeAddressBarHeight : 0}px)`,
    borderRadius: 0,
  },
  hidden: {
    display: 'none'
  }
}))

const Layout = () => {
  const classes = useStyles()
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationBar />
        <div style={{ maxWidth: minWidth, margin: '48px auto 0 auto' }}>
          <AppDrawer />
          <Paper className={classes.app}><App /></Paper>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default Layout
