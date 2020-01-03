import React from 'react'
import { Container, Typography } from '@material-ui/core'

const Home = ({state}) => {
  return (
    <Container>
      <Typography variant="h2">{`${state.connected}`}</Typography>
    </Container>
  )
}

export default Home
