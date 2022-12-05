import request from '@/utils/request'
// 登录
export const loginApi = () => {
  return request({
    url: '/mock/login',
    method: 'get'
  })
}

// 注册
export const registerApi = () => {
  return request({
    url: '/mock/register',
    method: 'get'
  })
}
