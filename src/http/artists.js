import axios from 'axios'

const { REACT_APP_SPOTIFY_API_URL } = process.env

export function getArtist(artistId) {
  const url = `${REACT_APP_SPOTIFY_API_URL}/artists/${artistId}`
  return axios.get(url)
}
