import axios from 'axios'

const { REACT_APP_SPOTIFY_API_URL } = process.env

export function getUser() {
  const url = `${REACT_APP_SPOTIFY_API_URL}/me`
  return axios.get(url)
}
