<template>
  <div class="app-container">首页</div>


</template>
<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from '@/store/useUser'
const {noticeClose, setNotice} = useUserStore()
const visible = ref(false)

onMounted(() => {
  
})





</script>