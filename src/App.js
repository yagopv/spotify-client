import React from 'react'

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Login from './features/auth/Login'
import PrivateRoute from './features/auth/PrivateRoute'
import { Dashboard } from './features/dashboard/Dashboard'
import { AuthProvider } from './lib/context/auth-context'
import { UIProvider } from './lib/context/ui-context'
import { GlobalStyle, theme } from './ui/theme'

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Router>
              <Switch>
                <PrivateRoute exact path="/">
                  <Dashboard />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/redirect">
                  <Redirect />
                </Route>
              </Switch>
            </Router>
          </React.Fragment>
        </ThemeProvider>
      </UIProvider>
    </AuthProvider>
  )
}

export default App
