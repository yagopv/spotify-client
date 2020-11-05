let tokens = JSON.parse(localStorage.getItem('tokens'))

export function setTokens(tk) {
  tokens = tk
}

export const requestInterceptor = {
  success(config) {
    const { access_token: token } = tokens || {}

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error(error) {
    return Promise.reject(error)
  }
}

export const responseInterceptor = {
  success(response) {
    return response.data
  },
  error(error) {
    if ([401, 403].includes(error.response.status)) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
}
