import React, { useState } from 'react'
import { InputBase, Divider, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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
    svg: {
      transform: 'rotateZ(-45deg)',
    },
    color: theme.palette.text.hint,
  },
}))

const InputBar = () => {
  const [isSendForbidden, setIsSendForbidden] = useState(true)
  const classes = useStyles()

  const onInputChange = e => {
    const { value: text } = e.target

    if (!text) setIsSendForbidden(true)
    else setIsSendForbidden(false)
  }

  return (
    <>
      <Divider />
      <form className={classes.root}>
        <IconButton className={classes.attachmentButton}>
          <AttachmentRounded className={classes.attachmentButton.svg} />
        </IconButton>
        <InputBase
          placeholder="Начните писать..."
          onChange={onInputChange}
          className={classes.input}
          fullWidth
        />
        <IconButton className={classes.sendButton} disabled={isSendForbidden}>
          <SendRounded />
        </IconButton>
      </form>
    </>
  )
}

export default InputBar
