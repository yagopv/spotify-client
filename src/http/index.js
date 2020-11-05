import axios from 'axios'
import * as artistsMethods from './artists'
import * as albumsMethods from './albums'
import * as tracksMethods from './tracks'
import * as searchMethods from './search'
import * as userMethods from './user'
import {
  requestInterceptor,
  responseInterceptor,
  setTokens
} from './interceptors'

axios.interceptors.request.use(
  requestInterceptor.success,
  requestInterceptor.error
)

axios.interceptors.response.use(
  responseInterceptor.success,
  responseInterceptor.error
)

const http = {
  ...artistsMethods,
  ...albumsMethods,
  ...tracksMethods,
  ...searchMethods,
  ...userMethods,
  setTokens
}

export default http
