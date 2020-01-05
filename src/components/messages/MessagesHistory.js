import React, { useState, useEffect } from 'react'
import { List, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Message from './Message'

const useStyles = makeStyles(theme => ({}))

const MessagesHistory = () => {
  const getMessages = async () => [
    {
      id: 1,
      chat_id: 1,
      text: 'heya we are here!',
      user_id: 1,
      ts: Date.now() - 10000,
    },
    {
      id: 2,
      chat_id: 1,
      text: 'ok',
      user_id: 2,
      ts: Date.now() - 5000,
      reply_message_id: 1,
    },
    {
      id: 3,
      chat_id: 1,
      text: 'Glad you re here',
      user_id: 3,
      ts: Date.now() - 2500,
    },
  ]

  const getUsers = async () => ({
    1: {
      id: 1,
      first_name: 'Vatslav',
      last_name: 'Tarnatovski',
      is_deleted: 0,
      domain: 'tarnatovski',
      has_photo: 1,
      photo:
        'https://sun9-52.userapi.com/c855624/v855624977/1abee2/RO9UZuUMhkE.jpg?ava=1',
    },
    2: {
      id: 2,
      first_name: 'Test',
      last_name: 'Kluchko',
      is_deleted: 0,
      domain: 'kluchko',
      has_photo: 1,
      photo:
        'https://sun9-68.userapi.com/c857332/v857332255/ad8b/QXWqeSD3C9o.jpg?ava=1',
    },
    3: {
      id: 3,
      first_name: 'Pavel',
      last_name: 'Durov',
      is_deleted: 0,
      domain: 'durov',
      has_photo: 1,
      photo:
        'https://sun9-22.userapi.com/c857532/v857532108/2438a/PL2nzgOz9Is.jpg?ava=1',
    },
  })

  const [messages, setMessagesHistory] = useState()
  const [users, setUsersData] = useState({})

  useEffect(() => {
    async function get() {
      setMessagesHistory(await getMessages())
      setUsersData(await getUsers())
    }
    get()
  }, [])

  return (
    <Container>
      <List>
        {messages &&
          messages.map(message => (
            <Message key={message.id} message={message} users={users} />
          ))}
      </List>
    </Container>
  )
}

export default MessagesHistory
