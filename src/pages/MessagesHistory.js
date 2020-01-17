import React, { useRef, useState, useEffect } from 'react'
import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Message from '../components/messages/Message'
import InputBar from '../components/messages/InputBar'
import isMobile from 'is-mobile'

const chromeAddressBarHeight = 56
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflow: 'auto',
    maxHeight: `calc(100vh - 48px - 48px - 16px - 1px - ${
      isMobile() ? chromeAddressBarHeight : 0
    }px)`,
  },
}))

const getMessages = async () =>
  Array(2)
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
  const listRef = useRef()
  const messagesEndRef = useRef()
  const refs = {}

  useEffect(() => {
    async function get() {
      setMessagesHistory(await getMessages())
      setUsersData(await getUsers())
      listRef.current.scrollTo(0, messagesEndRef.current.offsetTop)
    }
    get()
  }, [])

  useEffect(() => {
    listRef.current.scrollTo(0, messagesEndRef.current.offsetTop)
  }, [messages])

  const MessageBox = ({ message, i }) => {
    const [highlighted, setHighlightState] = useState(false)
    const { id, user_id, reply_message_id } = message
    const replyMessage = messages.find(e => e.id === reply_message_id)
    const user = users[message.user_id]
    const isDense =
      !replyMessage && i !== 0 && messages[i - 1].user_id === user_id
    const reply = replyMessage
      ? {
          message: replyMessage,
          user: users[replyMessage.user_id],
          ref: refs[replyMessage.id],
        }
      : {}

    const setRef = ref => (refs[id] = { ref, setHighlightState, highlighted })

    return (
      <Message
        isDense={isDense}
        message={message}
        user={user}
        reply={reply}
        setRef={setRef}
        highlighted={highlighted}
      />
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <List ref={listRef} className={classes.root}>
        {messages &&
          messages.map((message, i) =>
            message ? <MessageBox key={i} message={message} i={i} /> : null
          )}
        <div ref={messagesEndRef} />
      </List>
      <InputBar setMessagesHistory={setMessagesHistory} />
    </div>
  )
}

export default MessagesHistory
