import React from 'react'
import { Button, Header } from '../../ui'

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
    <div className="login">
      <Header />
      <Button type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
    </div>
  )
}
