import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { getParamValues } from '../../lib/utils'

export default function Redirect() {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const params = getParamValues(location.hash)
    const expiryTime = new Date().getTime() + params.expires_in * 1000
    localStorage.setItem('currentUser', JSON.stringify(params))
    localStorage.setItem('expiryTime', expiryTime)
    history.push('/')
  }, [history, location.hash])

  return null
}
