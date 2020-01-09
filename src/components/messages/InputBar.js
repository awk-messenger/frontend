import React from 'react'
import { Box, InputBase, Divider } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    // position: 'absolute',
    // bottom: 0,
  },
  box: {
    backgroundColor: theme.palette.background.default
  },
  input: {
    border: '2px solid ' + theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  }
}))

const InputBar = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Divider />
      <Box p={2} className={classes.box}>
        <InputBase className={classes.input} fullWidth />
      </Box>
    </div>
  )
}

export default InputBar
