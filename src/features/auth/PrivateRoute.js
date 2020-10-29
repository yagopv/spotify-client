import React from 'react'
import { Route, Redirect } from 'react-router'
import { useAuth } from '../../lib/context/auth-context'

export default function PrivateRoute({ children, ...others }) {
  const [{ isAuthenticated }] = useAuth()

  return (
    <Route {...others}>
      {isAuthenticated ? children : <Redirect to="/login" />}
    </Route>
  )
}
