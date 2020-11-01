import axios from 'axios'

const { REACT_APP_SPOTIFY_API_URL } = process.env
export function getTrack(trackId) {
  const url = `${REACT_APP_SPOTIFY_API_URL}/tracks/${trackId}`
  return axios.get(url)
}
