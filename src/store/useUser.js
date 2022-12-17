import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useUserStore = defineStore('counter', () => {
  const token = ref(localStorage.getItem('token'))
  const userInfo = ref(JSON.parse(JSON.stringify(localStorage.getItem('userInfo'))) || {})
  const setToken = (val) => {
    token.value = val.id
    localStorage.setItem('token', val)
    userInfo.value = val
    localStorage.setItem('userInfo', JSON.stringify(val))
  }
  const clearToken = () => {
    token.value = ''
    localStorage.removeItem('token')
  }



  const noticeClose = ref(false)

  const setNotice = () => {
    noticeClose.value = true
  }

  return { token, setToken, clearToken, noticeClose, setNotice, userInfo }
})