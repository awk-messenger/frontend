import React from 'react'
import { Container, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DialogsList from '../components/messages/MessagesDialogsList'
import MessagesHistory from '../components/messages/MessagesHistory'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: '100%',
    height: 'calc(100vh - 42px)'
  },
}))

const Messages = ({state}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <DialogsList />
      <MessagesHistory />
    </Paper>
  )
}

export default Messages
