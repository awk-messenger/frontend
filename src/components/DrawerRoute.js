import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'

const DrawerRoute = ({ route, count }) => {
  const { name, icon, path } = route

  return (
    <ListItem button component={Link} to={'/' + path}>
      <ListItemIcon>
        <Badge badgeContent={count} invisible={!count} color="primary">
          {icon}
        </Badge>
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  )
}

export default DrawerRoute
