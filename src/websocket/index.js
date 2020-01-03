import io from 'socket.io-client'
import { WS_URL, WS_RECONNECT_TIMEOUT } from '../config/constants'
import log from '../globals/log'

const socket = io(WS_URL, { autoConnect: false })
let timerStart = Date.now()

/**
 * Connects to the WS server
 */
const connectToWS = () => socket.connect()

/**
 * Reconnects to the WS server
 */
const reconnectToWS = () => {
  log.info('Reconnecting to the WS server...')
  connectToWS()

  setTimeout(() => {
    if (socket.disconnected) {
      log.warn(
        'Could not reconnect to the WS server, retrying in ' +
          WS_RECONNECT_TIMEOUT +
          'ms'
      )
      reconnectToWS()
    }
  }, WS_RECONNECT_TIMEOUT)
}

/** Ty connecting to the WS server */
if (socket.disconnected) connectToWS()

socket.on('connect', () => {
  const connectionTime = Date.now() - timerStart
  log.info('Connected to the server by WS in ' + connectionTime + 'ms')
})

socket.on('disconnect', () => {
  timerStart = Date.now()
  reconnectToWS()
})

export default socket
