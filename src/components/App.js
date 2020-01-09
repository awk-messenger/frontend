import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Home from '../pages/Home'
import MessagesDialogs from '../pages/MessagesDialogs'
import MessagesHistory from '../pages/MessagesHistory'
import socket from '../websocket'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}))

const App = () => {
  const [connected, setConnectedState] = useState(socket.connected)
  const state = { connected }
  const classes = useStyles()

  socket.on('connect', () => setConnectedState(true))
  socket.on('disconnect', () => setConnectedState(false))

  // Set root classes
  document.body.className = classes.root

  return (
    <>
      <Switch>
        {/* Chats */}
        <Route path="/im/chat/:id">
          <MessagesHistory state={state} />
        </Route>

        {/* Messages */}
        <Route path="/im">
          <MessagesDialogs state={state} />
        </Route>

        {/* Home */}
        <Route path="/">
          <Home state={state} />
        </Route>
      </Switch>
    </>
  )
}

export default App
