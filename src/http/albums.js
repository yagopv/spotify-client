import axios from 'axios'

const { REACT_APP_SPOTIFY_API_URL } = process.env

export function getAlbum(albumId) {
  const url = `${REACT_APP_SPOTIFY_API_URL}/albums/${albumId}`
  return axios.get(url)
}
