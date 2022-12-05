
// 先引入mockjs模块
import Mock from 'mockjs'
import login from './login.json'

// mock数据:第一个参数：请求地址   第二个参数：请求数据（200代表请求成功，data代表数据）
Mock.mock('/mock/login', {
  code: 200,
  data: login,
})

Mock.mock('/mock/register', {
  code: 200,
  data: login,
})