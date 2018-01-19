import service from '../utils/service'
// 登录
export function login (data) {
  return service({
    url: 'login/login',
    method: 'post',
    data
  })
}
