<template>
  <a-row type="flex" :gutter="[20,20]">
    <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4" v-for="(item, index) in list" :key="index" v-if="list.length">
      <a-card hoverable style="width: 100%" @click="setRecord(item.movieid)">
        <template #cover>
          <img alt="example" :src="item.url || 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'" />
        </template>
        <a-card-meta :title="item.title">
          <template #description>
            <div>
              <div class="tag" v-if="item.tag">
                <a-tag color="orange" style="margin-bottom: 10px" v-for="i in item.tag" :key="i" >{{i}}</a-tag>
              </div>
              <!-- <div class="time"><history-outlined /> 2020/09/30 22:00</div> -->
              <div class="time">{{item.genres}}</div>
            </div>
          </template>
        </a-card-meta>
      </a-card>
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="display: flex;flex-direction: column;align-items: center;"  v-else>
      <img src="../../assets/no-data.png" alt="">
      <div>暂无数据</div>
    </a-col>
  </a-row>
  <!-- 分页 -->
  <a-row justify="end" style="margin-top: 20px" v-if="total">
    <a-col :xs="24" :sm="24" :md="20" :lg="14" :xl="10" style="text-align:right">
      <a-pagination v-model:current="current" :total="total" @change="change" />
    </a-col>
  </a-row>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useUserStore } from '@/store/useUser'
import { setRecords } from '@/api/home'
import { message } from 'ant-design-vue';
const {token} = useUserStore()
const emits = defineEmits(['change'])
const current = ref(1)
const props = defineProps({
  list: {
    type: Array,
    default: []
  },
  total: {
    type: Number,
    default: 0
  },
  activeKey: {
    type: Number,
    default: 0
  }
})

const change = (page, pageSize) => {
  current.value = page
  emits('change', page, pageSize)
}

const setRecord = (id) => {
  setRecords({
    userid: Number(token),
    movieid: id
  }).then(res => {
    if (res.code == 200) {
      message.success('设置浏览成功')
    } else {
       message.info(res.msg || '服务器内部错误')
    }
  })
}
</script>