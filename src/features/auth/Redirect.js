import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import http from '../../http'
import { useAuth } from '../../lib/context/auth-context'
import { getParamValues } from '../../lib/helpers'

export default function Redirect() {
  const history = useHistory()
  const location = useLocation()
  const { setTokens } = useAuth()

  useEffect(() => {
    const params = getParamValues(location.hash)
    const expiryTime = new Date().getTime() + params.expires_in * 1000
    localStorage.setItem('tokens', JSON.stringify(params))
    localStorage.setItem('expiryTime', expiryTime)
    http.setTokens(params)
    setTokens(params)
    history.push('/')
  }, [history, location.hash, setTokens])

  return null
}
