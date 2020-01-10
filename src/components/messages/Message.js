import React, { useState, useRef } from 'react'
import { Grid, Avatar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles, fade } from '@material-ui/core/styles'
import ReplyMessage from './MessageReply'
import moment from 'moment'
import { CheckCircleRounded } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    cursor: 'pointer',
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  focused: {
    background: fade(theme.palette.primary.light, 0.2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  ts: {
    color: theme.palette.text.hint,
    paddingLeft: 4,
    fontSize: 13,
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
    marginTop: theme.spacing(0.25),
    color: theme.palette.text.primary,
  },
  checkboxIcon: {
    marginRight: theme.spacing(2),
  },
  checkboxIconFocus: {
    color: fade(theme.palette.primary.light, 0.5),
  },
  checkboxIconHover: {
    color: fade(theme.palette.primary.light, 0.2),
  },
  highlight: {
    background: fade(theme.palette.primary.light, 0.1)
  }
}))

const Message = ({ message, user, reply, isDense, setRef, highlighted }) => {
  const [focused, setFocusedState] = useState(false)
  const [isHovered, setHoverState] = useState(false)
  const onClick = id => {
    setFocusedState(!focused)
  }

  const { text, id } = message
  const domain = user ? user.domain : '/'
  const photo = user ? user.photo : ''
  const fullName = user ? user.first_name + ' ' + user.last_name : 'UNNAMED'
  const ts = moment(message.ts).format('h:mm')
  const classes = useStyles()
  const ref = useRef()
  setRef(ref)

  return (
    <div
      className={`${classes.root} ${isDense ? '' : classes.marginTop} ${
        focused ? classes.focused : ''
      } ${highlighted ? classes.highlight : ''}`}
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      onClick={() => onClick(id)}
      ref={ref}
    >
      <Grid container>
        {/** Avatar */}
        <Grid item className={classes.avatar}>
          <Link to={'/' + domain}>
            <Avatar alt={domain} src={photo}></Avatar>
          </Link>
        </Grid>

        {/** Message box */}
        <Grid item sm container direction="column">
          <Grid item>
            <Link className={classes.link} to={'/' + domain}>
              {fullName}
            </Link>
            <span className={classes.ts}>&nbsp;{ts}</span>
          </Grid>
          <Grid item>
            <ReplyMessage reply={reply} />
            <Typography className={classes.text} variant="body2">
              {text}
            </Typography>
          </Grid>
        </Grid>

        {/** Checkbox icon */}
        <Grid item>
          <CheckCircleRounded
            className={
              classes.checkboxIcon +
              ' ' +
              (focused
                ? classes.checkboxIconFocus
                : isHovered
                ? classes.checkboxIconHover
                : '')
            }
            style={{ display: isHovered || focused ? 'flex' : 'none' }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Message
