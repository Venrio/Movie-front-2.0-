import request from '@/utils/request'
// 获取浏览记录
export const getRecords = () => {
  return request({
    url: '/api/browse-records/get-records',
    method: 'get'
  })
}

// 设置浏览记录
export const setRecords = (data) => {
  return request({
    url: '/api/browse-records/set-records',
    method: 'post',
    data
  })
}


// 为你推荐
export const listDefault = () => {
  return request({
    url: '/api/movies/listDefault',
    method: 'get'
  })
}

// 为你推荐性别查询
export const showMostHotByGender = () => {
  return request({
    url: '/api/users-ratings/showMostHotByGender',
    method: 'get'
  })
}


// 关键字搜索
export const listByKeyWord = () => {
  return request({
    url: '/api/movies/listByKeyWord',
    method: 'get'
  })
}

// 风格搜索
export const showMostHotByGenres = () => {
  return request({
    url: '/api/movies-ratings/showMostHotByGenres',
    method: 'get'
  })
}

// 根据用户id
export const listByUserId = () => {
  return request({
    url: '/api/movies-ratings/listByUserId',
    method: 'get'
  })
}

// 区分性别和评分
export const listByGenderRating = () => {
  return request({
    url: '/api/users-ratings/listByGenderRating',
    method: 'get'
  })
}

