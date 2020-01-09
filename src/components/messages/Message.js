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
import { blue } from '@material-ui/core/colors'
import ReplyMessage from './MessageReply'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    cursor: 'pointer',
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  focused: {
    background: blue[50],
  },
  ts: {
    color: theme.palette.text.hint,
    paddingLeft: 4,
    fontSize: 15,
  },
  link: {
    color: theme.palette.primary.light,
    textDecoration: 'none',
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  text: {
    color: theme.palette.text.primary,
  },
}))

const Message = ({ message, user, reply, isDense }) => {
  const [focused, setFocusedState] = useState(false)
  const onClick = id => {
    setFocusedState(!focused)
  }

  const { text, id } = message
  const domain = user ? user.domain : '/'
  const photo = user ? user.photo : ''
  const fullName = user ? user.first_name + ' ' + user.last_name : 'UNNAMED'
  const ts = moment(message.ts).format('h:mm')
  const classes = useStyles()

  return (
    <ListItem
      dense
      key={id}
      className={`${classes.root} ${focused && classes.focused} ${!isDense &&
        classes.marginTop}`}
      onClick={() => onClick(id)}
    >
      {!isDense && (
        <ListItemAvatar>
          <Link to={'/' + domain}>
            <Avatar alt={domain} src={photo} />
          </Link>
        </ListItemAvatar>
      )}
      <ListItemText
        disableTypography
        inset={isDense}
        primary={
          !isDense && (
            <>
              <Link className={classes.link} to={'/' + domain}>
                {fullName}
              </Link>
              <span className={classes.ts}>&nbsp;{ts}</span>
            </>
          )
        }
        secondary={
          <>
            {reply && <ReplyMessage reply={reply} />}
            <Typography
              style={{ marginTop: isDense ? 0 : 4 }}
              className={classes.text}
              variant="body2"
            >
              {text}
            </Typography>
          </>
        }
      />
    </ListItem>
  )
}

export default Message
