let currentUser = JSON.parse(localStorage.getItem('currentUser'))

export const tokenManagerInterceptor = {
  success(config) {
    const { access_token: token } = currentUser

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error(error) {
    return Promise.reject(error)
  }
}

export const dataInterceptor = {
  success(response) {
    return response.data
  }
}

export { currentUser }
