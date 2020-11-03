import React, { useState } from 'react'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [tokens, setTokens] = useState(localStorage.getItem('tokens'))
  const [currentUser, setCurrentUser] = useState()

  return (
    <AuthContext.Provider
      value={{ tokens, setTokens, currentUser, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  let value = React.useContext(AuthContext)
  if (value === null) {
    throw new Error('Component must be wrapped with an AuthProvider')
  }
  return value
}
