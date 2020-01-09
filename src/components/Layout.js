import React from 'react'
import { ThemeProvider, Paper, makeStyles } from '@material-ui/core'
import theme from '../config/theme'
import App from './App'
import NavigationBar from './NavigationBar'
import AppDrawer from './AppDrawer'
import { BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex', 
    height: 'calc(100vh - 48px)',
    borderRadius: 0,
    
  }
}))

const Layout = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationBar />
        <div style={{ maxWidth: 882, margin: '48px auto 0 auto' }}>
          <AppDrawer />
          <Paper className={classes.app}><App /></Paper>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default Layout
