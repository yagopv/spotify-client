import axios from 'axios'
import * as artistsMethods from './artists'
import * as albumsMethods from './albums'
import * as tracksMethods from './tracks'
import * as searchMethods from './search'
import { tokenInterceptor } from './interceptors'

axios.interceptors.request.use(tokenInterceptor.success, tokenInterceptor.error)

const http = {
  ...artistsMethods,
  ...albumsMethods,
  ...tracksMethods,
  ...searchMethods,
}

export default http
