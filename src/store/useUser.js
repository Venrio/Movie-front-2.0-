import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useUserStore = defineStore('counter', () => {
  const token = ref(localStorage.getItem('token'))
  const setToken = (val) => {
    token.value = val
    localStorage.setItem('token', val)
  }
  const clearToken = () => {
    token.value = ''
    localStorage.removeItem('token')
  }


  const noticeClose = ref(false)

  const setNotice = () => {
    noticeClose.value = true
  }

  return { token, setToken, clearToken, noticeClose, setNotice }
})