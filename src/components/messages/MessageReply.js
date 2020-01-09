import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    borderLeft: '2px solid ' + (theme.palette.type === 'light' ? blue[100] : blue[800]),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(3) / 2,
    '&:hover': {
      borderLeft: '2px solid ' + (theme.palette.type === 'light' ? '#90caf9' : '#1565c0'),
    }
  },
  title: {
    color: theme.palette.primary.light,
    fontWeight: 500,
  },
  text: {
    color: theme.palette.text.primary
  }
}))

const MessageReply = ({ reply }) => {
  const classes = useStyles()
  if (!reply.message) return null
  
  const { message, user } = reply
  const { text } = message
  const fullName = user ? `${user.first_name} ${user.last_name}` : 'UNNAMED'

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.title}>{fullName}</Typography>
      <Typography className={classes.text} variant="body2">{text}</Typography>
    </div>
  )
}

export default MessageReply
