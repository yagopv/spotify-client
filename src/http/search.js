import axios from 'axios'

const { REACT_APP_SPOTIFY_API_URL } = process.env

export function search(query, type, { page = 0, limit = 8 }) {
  const url = `${REACT_APP_SPOTIFY_API_URL}/search?q=${query}&type=${type}&offset=${
    page * limit
  }&limit=${limit}`
  return axios.get(url)
}
