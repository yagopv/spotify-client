import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import http from '../../http'
import { useAuth } from '../../lib/context/auth-context'
import { getParamValues } from '../../lib/helpers'

export default function Redirect() {
  const history = useHistory()
  const location = useLocation()
  const [, setUser] = useAuth()

  useEffect(() => {
    const params = getParamValues(location.hash)
    const expiryTime = new Date().getTime() + params.expires_in * 1000
    localStorage.setItem('currentUser', JSON.stringify(params))
    localStorage.setItem('expiryTime', expiryTime)
    http.currentUser = params
    setUser(params)
    history.push('/')
  }, [history, location.hash, setUser])

  return null
}
