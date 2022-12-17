import request from '@/utils/request'
// 获取浏览记录
export const getRecords = (data) => {
  return request({
    url: '/api/browse-records/get-records',
    method: 'post',
    data
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
export const listDefault = (data) => {
  return request({
    url: '/api/movies/listDefault',
    method: 'post',
    data
  })
}

// 为你推荐性别查询
export const showMostHotByGender = (data) => {
  return request({
    url: '/api/users-ratings/showMostHotByGender',
    method: 'post',
    data
  })
}


// 关键字搜索
export const listByKeyWord = (data) => {
  return request({
    url: '/api/movies/listByKeyWord',
    method: 'post',
    data
  })
}

// 风格搜索
export const showMostHotByGenres = (data) => {

  return request({
    url: '/api/movies-ratings/showMostHotByGenres',
    method: 'post',
    data
  })
}

// 根据用户id
export const listByUserId = (data) => {
  return request({
    url: '/api/movies-ratings/listByUserId',
    method: 'post',
    data
  })
}

// 区分性别和评分
export const listByGenderRating = (data) => {
  return request({
    url: '/api/users-ratings/listByGenderRating',
    method: 'post',
    data
  })
}

