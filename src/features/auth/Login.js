import React from 'react'
import { Button, Flex, Text } from '../../ui'

export default function Login() {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      fullHeight
      bg="black"
      direction="column"
    >
      <Text as="h1">Welcome to the Spotify Client</Text>
      <Text as="h4" mt="md" mb="xl" color="darkGrey">
        Please login to start using the app
      </Text>
      <Button type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
    </Flex>
  )
}
