import axios from 'axios'

const { REACT_APP_SPOTIFY_URL } = process.env

export function getArtist(artistId) {
  const url = `${REACT_APP_SPOTIFY_URL}/artists/${artistId}`
  return axios.get(url)
}
