import React from 'react'
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
    height: '100%'
  },
  drawerPaper: {
    width: 316,
    position: 'unset',
  },
}))

const MessagesDialogsList = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem button key={1}>
          <ListItemAvatar>
            <Avatar
              alt="Флексократия"
              src="https://sun6-16.userapi.com/c857720/v857720977/1406e3/aQQhxMHCgi8.jpg?ava=1"
            />
          </ListItemAvatar>
          <ListItemText primary={'Флексократия'} secondary={'ну че'} />
        </ListItem>
        <Divider />
        <ListItem button key={2}>
          <ListItemAvatar>
            <Avatar
              alt="Флексократия"
              src="https://sun9-62.userapi.com/c855236/v855236283/9b9b3/8kpy9bqMQXQ.jpg?ava=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary={'без османов'}
            secondary={'фывфывщгшнапрщвышгап фщывгащфгшвы'}
          />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  )
}

export default MessagesDialogsList
