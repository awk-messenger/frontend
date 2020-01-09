import React, { useState } from 'react'
import { Box, InputBase, Divider, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SendRounded, AttachmentRounded } from '@material-ui/icons'
import { blue } from '@material-ui/core/colors'

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
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  iconButton: {
    color: theme.palette.primary.main,
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
        <IconButton className={classes.iconButton}>
          <AttachmentRounded />
        </IconButton>
        <InputBase
          placeholder="Начните писать..."
          onChange={onInputChange}
          className={classes.input}
          fullWidth
        />
        <IconButton className={classes.iconButton} disabled={isSendForbidden}>
          <SendRounded />
        </IconButton>
      </form>
    </>
  )
}

export default InputBar
