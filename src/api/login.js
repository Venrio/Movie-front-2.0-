import request from '@/utils/request'
// 登录
export const loginApi = (data) => {
  return request({
    url: '/api/user/login',
    method: 'post',
    headers:{"content-type":"application/json"},
    data:data
  })
}

// 注册
export const registerApi = () => {
  return request({
    url: '/mock/register',
    method: 'get'
  })
}
