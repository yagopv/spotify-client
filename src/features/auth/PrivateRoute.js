import React from 'react'
import { Route, Redirect } from 'react-router'
import { useAuth } from '../../lib/context/auth-context'

export default function PrivateRoute({ children, ...others }) {
  const { tokens } = useAuth()

  return (
    <Route {...others}>{tokens ? children : <Redirect to="/login" />}</Route>
  )
}
