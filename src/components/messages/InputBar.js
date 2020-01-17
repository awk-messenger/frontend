import React, { useState, useRef } from 'react'
import { InputBase, Divider, IconButton } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { SendRounded, AttachmentRounded } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    flex: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  sendButton: {
    color: theme.palette.primary.main,
  },
  attachmentButton: {
    color: theme.palette.text.hint,
  },
  rotateIcon: {
    transform: 'rotateZ(-45deg)',
  }
}))

const InputBar = ({ setMessagesHistory }) => {
  const [isSendForbidden, setIsSendForbidden] = useState(true)
  const inputRef = useRef()
  const classes = useStyles()

  const onInputChange = e => {
    const { value: text } = e.target

    if (!text) setIsSendForbidden(true)
    else setIsSendForbidden(false)
  }

  const onSendClick = e => {
    e.preventDefault()
    if (isSendForbidden) return

    const { value: text } = inputRef.current
    const message = {
      id: Math.floor(Math.random() * 100000),
      text,
      chat_id: 1,
      user_id: 1,
      ts: Date.now()
    }

    setMessagesHistory(prev => [ ...prev, message])
    inputRef.current.value = ''
    setIsSendForbidden(true)
  }

  return (
    <>
      <Divider />
      <form className={classes.root} onSubmit={onSendClick}>
        <IconButton className={classes.attachmentButton}>
          <AttachmentRounded className={classes.rotateIcon} />
        </IconButton>
        <InputBase
          inputProps={{ ref: inputRef }}
          placeholder="Начните писать..."
          onChange={onInputChange}
          className={classes.input}
          fullWidth
        />
        <IconButton onClick={onSendClick} className={classes.sendButton} disabled={isSendForbidden}>
          <SendRounded />
        </IconButton>
      </form>
    </>
  )
}

export default InputBar
