import React, { useState, useEffect } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 316,
    height: 'calc(100vh - 42px)',
  },
  drawerPaper: {
    width: 316,
    position: 'unset',
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

const getDialogs = async () => [
  {
    id: 1,
    title: 'Флексократия',
    cover:
      'https://sun6-16.userapi.com/c857720/v857720977/1406e3/aQQhxMHCgi8.jpg?ava=1',
    last_message: {
      id: 15,
      text: 'ну че',
      user_id: 1,
    },
  },
  {
    id: 2,
    title: 'Test 2',
    cover:
      'https://sun6-16.userapi.com/c857720/v857720977/1406e3/aQQhxMHCgi8.jpg?ava=1',
    last_message: {
      id: 15,
      text:
        'test test test test test test test test test test test test test test test test test test ',
      user_id: 1,
    },
  },
]

const MessagesDialogsList = () => {
  const [dialogs, setDialogs] = useState([])
  const classes = useStyles()

  useEffect(() => {
    const get = async () => {
      setDialogs(await getDialogs())
    }
    get()
  }, [])

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List style={{ overflow: 'auto' }} disablePadding>
        {dialogs &&
          dialogs.map((dialog, i) => (
            <>
              <ListItem button key={i}>
                <ListItemAvatar>
                  <Avatar alt={dialog.title} src={dialog.cover} />
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    className: classes.truncate,
                  }}
                  secondaryTypographyProps={{
                    className: classes.truncate,
                  }}
                  primary={dialog.title}
                  secondary={dialog.last_message.text}
                />
              </ListItem>
              <Divider />
            </>
          ))}
      </List>
    </Drawer>
  )
}

export default MessagesDialogsList
