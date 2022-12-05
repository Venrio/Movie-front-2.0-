import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import './style.css'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
// mock数据
import '@/mock/mockServe.js'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(createPinia())
app.mount('#app')
