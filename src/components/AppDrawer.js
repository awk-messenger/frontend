import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Avatar, Typography, List } from '@material-ui/core'
import { Link } from 'react-router-dom'
import routes from '../config/routes'
import DrawerRoute from './DrawerRoute'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    position: 'static',
    float: 'left',
    width: theme.spacing(33),
    marginRight: 0,
    marginLeft: 12,
    marginTop: 12,
  },
  verticalAlign: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    color: theme.palette.text.primary,
  },
  list: {
    overflow: 'auto',
  },
}))

const getUser = async () => ({
  id: 1,
  first_name: 'Vatslav',
  last_name: 'Tarnatovski',
  avatar:
    'https://sun9-52.userapi.com/c855624/v855624977/1abee2/RO9UZuUMhkE.jpg?ava=1',
  domain: 'tarnatovski',
})

const AppDrawer = () => {
  const [user, setUser] = useState({})
  const classes = useStyles()

  useEffect(() => {
    const get = async () => {
      setUser(await getUser())
    }
    get()
  }, [])

  const userFullName = user.first_name + ' ' + user.last_name

  return (
    <div className={classes.root}>
      <Link to={user.domain} className={classes.link}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar alt={userFullName} src={user.avatar} />
          </Grid>
          <Grid item className={classes.verticalAlign}>
            <Typography variant="body1">{userFullName}</Typography>
          </Grid>
        </Grid>
      </Link>

      <List className={classes.list}>
        {routes.map((route, i) => (
          <DrawerRoute route={route} key={i} count={4} />
        ))}
      </List>
    </div>
  )
}

export default AppDrawer
