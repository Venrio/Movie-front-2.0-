
import {defineAsyncComponent} from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/store/useUser'
import Layout from '@/layout/index.vue'
const routes = [
  {
      path: "/login",
      name: "login",
      component: () => import('@/views/login/index.vue')
  },
  
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
  
]
//路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { token } = useUserStore()
  
  const whiteList = ['/login', '/404', '/register']
  // 如果没有token就跳转到login
  if (!whiteList.includes(to.path) && !token) {
    next({
      path: '/login'
    })
  } else if (to.path == '/login' && token) {
    next({
      path: '/home'
    })
  } else {
    next()
  }
})

//导出路由对象，在main.js中引用
export default router