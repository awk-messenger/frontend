import React, { useState } from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textPrimary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    color: theme.palette.primary.light,
    textDecoration: 'none'
  }
}))

const Message = ({ message, users }) => {
  const { text, id } = message
  const user = users[message.user_id]
  const domain = user ? user.domain : '/'
  const photo = user ? user.photo : ''
  const fullName = user ? user.first_name + ' ' + user.last_name : 'UNNAMED'
  const ts = message.ts
  const classes = useStyles()

  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Link to={domain}>
          <Avatar alt={domain} src={photo} />
        </Link>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.textPrimary}>
            <Link className={classes.link} to={domain}>{fullName}</Link>
            <Typography>{new Date(ts).toLocaleString()}</Typography>
          </div>
        }
        secondary={text}
      ></ListItemText>
    </ListItem>
  )
}

export default Message
