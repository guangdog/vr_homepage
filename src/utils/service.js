import axios from 'axios'
const service = axios.create({
  baseURL: '',
  timeout: 5000 // 请求超时时间
})
export default service
