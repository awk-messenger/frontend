import React, { useState, useEffect } from 'react'
import { List, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Message from '../components/messages/Message'
import InputBar from '../components/messages/InputBar'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflow: 'auto',
    maxHeight: 'calc(100vh - 48px)',
  },
}))

const getMessages = async () =>
  Array(5)
    .fill([
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
      {
        id: 4,
        chat_id: 1,
        text: 'Glad you re here',
        user_id: 3,
        ts: Date.now() - 2500,
      },
      {
        id: 5,
        chat_id: 1,
        text: 'Glad you re here',
        user_id: 3,
        ts: Date.now() - 2500,
      },
      {
        id: 6,
        chat_id: 1,
        text: 'Glad you re here',
        user_id: 3,
        ts: Date.now() - 2500,
        reply_message_id: 1,
      },
      {
        id: 7,
        chat_id: 1,
        text: 'Glad you re here',
        user_id: 3,
        ts: Date.now() - 2500,
      },
      {
        id: 8,
        chat_id: 1,
        text: 'Glad you re here',
        user_id: 3,
        ts: Date.now() - 2500,
      },
      {
        id: 9,
        chat_id: 1,
        text: 'Glad you re here',
        user_id: 3,
        ts: Date.now() - 2500,
      },
    ])
    .flat()
    .map((e, i) => ({ ...e, id: i }))

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

const MessagesHistory = () => {
  const [messages, setMessagesHistory] = useState([])
  const [users, setUsersData] = useState({})
  const classes = useStyles()

  useEffect(() => {
    async function get() {
      setMessagesHistory(await getMessages())
      setUsersData(await getUsers())
    }
    get()
  }, [])

  return (
    <>
      <List className={classes.root}>
        {messages &&
          messages.map((message, i) => {
            const replyMessage = messages.find(
              e => e.id === message.reply_message_id
            )
            const user = users[message.user_id]
            const isDense =
              !replyMessage &&
              i !== 0 &&
              messages[i - 1].user_id === message.user_id
            const { id } = message
            const reply = {
              message: replyMessage,
              user: replyMessage ? users[replyMessage.user_id] : null,
            }

            return (
              <Message
                key={id}
                isDense={isDense}
                message={message}
                user={user}
                reply={reply}
              />
            )
          })}
      </List>

      <InputBar />
    </>
  )
}

export default MessagesHistory
