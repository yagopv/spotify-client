import React from 'react'
import { Route, Redirect } from 'react-router'
import { useAuth } from '../../lib/context/auth-context'

export default function PrivateRoute({ children, ...others }) {
  const [user] = useAuth()

  return <Route {...others}>{user ? children : <Redirect to="/login" />}</Route>
}
