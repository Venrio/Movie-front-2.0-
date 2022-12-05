<template>
  <a-row class="navBar">
    <a-col :span="18" class="center left">
      欢迎你，XXX
    </a-col>
    <a-col :span="4" class="center" @click="goOut">
      退出登录
    </a-col>
  </a-row>

</template>
<script setup>
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/store/useUser'
const { token, clearToken } = useUserStore()
const router = useRouter()
const goOut = () => {
  clearToken()
  router.push('/login')
}

</script>
<style lang="less" scoped>
  .navBar{
    width: 100%;
    height: 82px;
    background: #001529;
    padding: 0 20px 0 35px;
    box-sizing: border-box;
    color: #fff;
    
    .center {
      height: 100%;
      line-height: 82px;
      text-align: right;
      cursor: pointer;
    }
    .left {
      text-align: left;
    }
    .center:hover {
      color: #f47920;
    }
  }
</style>