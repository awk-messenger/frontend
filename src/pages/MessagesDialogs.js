import React, { useState, useEffect } from 'react'
import {
  ListItemAvatar,
  Divider,
  ListItemText,
  Avatar,
  List,
  ListItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: '100%',
    height: '100%',
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  list: {
    overflow: 'auto',
    width: '100%'
  }
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

const MessagesDialogs = ({ state }) => {
  const [dialogs, setDialogs] = useState([])
  const classes = useStyles()

  useEffect(() => {
    const get = async () => {
      setDialogs(await getDialogs())
    }
    get()
  }, [])

  return (
    <List className={classes.list} disablePadding>
      {dialogs &&
        dialogs.map((dialog, i) => (
          <div key={i}>
            <ListItem component={Link} to={'/im/chat/' + dialog.id} button>
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
          </div>
        ))}
    </List>
  )
}

export default MessagesDialogs
