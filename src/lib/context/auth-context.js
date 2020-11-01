import React, { useState } from 'react'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const state = useState(localStorage.getItem('currentUser'))

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export function useAuth() {
  let value = React.useContext(AuthContext)
  if (value === null) {
    throw new Error('Component must be wrapped with an AuthProvider')
  }
  return value
}
