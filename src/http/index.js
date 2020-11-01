import axios from 'axios'
import * as artistsMethods from './artists'
import * as albumsMethods from './albums'
import * as tracksMethods from './tracks'
import * as searchMethods from './search'
import * as userMethods from './user'
import {
  tokenManagerInterceptor,
  dataInterceptor,
  currentUser
} from './interceptors'

axios.interceptors.request.use(
  tokenManagerInterceptor.success,
  tokenManagerInterceptor.error
)

axios.interceptors.response.use(dataInterceptor.success)

const http = {
  ...artistsMethods,
  ...albumsMethods,
  ...tracksMethods,
  ...searchMethods,
  ...userMethods,
  currentUser
}

export default http
