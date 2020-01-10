import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: '48px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.08), 0 0 2px 0 rgba(0,0,0,.06)'
  }
}))

const NavigationBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.logo}>
            {/*<Logo />*/}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavigationBar
