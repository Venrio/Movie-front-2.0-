import request from '@/utils/request'
// 登录
export const loginApi = () => {
  return request({
    url: '/user/login',
    method: 'post'
  })
}

// 注册
export const registerApi = () => {
  return request({
    url: '/mock/register',
    method: 'get'
  })
}
