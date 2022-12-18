<template>
  <div class="app-container">
    <a-tabs v-model:activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="1">
        <template #tab>
          <span>
            <apple-outlined />
            浏览记录
          </span>
        </template>

        <TableList :list="list" :total="total" @change="change" :activeKey="1"/>
          
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span>
            <apple-outlined />
            搜索电影
          </span>
        </template>

        <a-form
          style="margin-bottom: 20px; width: 100%;"
          :model="formState"
          name="horizontal_login"
          layout="inline"
          autocomplete="off"
          @finish="onFinish"
        >
        <a-row type="flex" :gutter="[20,20]" style="width: 100%;">
          <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
            <a-form-item>
              <a-input v-model:value="formState.keyWord" placeholder="请输入关键字"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
            <a-form-item>
              <a-input v-model:value="formState.genres" placeholder="请输入风格"></a-input>
            </a-form-item>
          </a-col>
          <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
            <a-form-item>
              <a-button type="primary" html-type="submit">搜索</a-button>
            </a-form-item>
          </a-col>
        </a-row>
        
        
          
        </a-form>

        <TableList :list="list" :total="total" @change="change"/>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <span>
            <apple-outlined />
            为你推荐
          </span>
        </template>
        <a-form
          style="margin-bottom: 20px; width: 100%;"
          :model="formState2"
          name="horizontal_login"
          layout="inline"
          autocomplete="off"
          @finish="onFinish"
        >
          <a-row type="flex" :gutter="[20,20]" style="width: 100%;">
            <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
              <a-form-item>
                <a-select
                  placeholder="请选择性别"
                  ref="select"
                  v-model:value="formState2.gender"
                  style="width: 100%"
                >
                  <a-select-option value="Man">男</a-select-option>
                  <a-select-option value="Female">女</a-select-option>
                  </a-select>
                </a-form-item>
            </a-col>
            <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
              <a-form-item>
                <a-button type="primary" html-type="submit">搜索</a-button>
              </a-form-item>
            </a-col>
          </a-row>  
        </a-form>
        
        <TableList :list="list" :total="total" @change="change"/>
      </a-tab-pane>
      <a-tab-pane key="4">
        <template #tab>
          <span>
            <apple-outlined />
            查询功能
          </span>
        </template>
        <a-tabs v-model:activeKey="searchActive" type="card" @tabClick="changeTabSmall">
          <a-tab-pane key="1" tab="用户观看记录查询">
            <a-form
              style="margin-bottom: 20px; width: 100%;"
              :model="formState3"
              name="horizontal_login"
              layout="inline"
              autocomplete="off"
              @finish="onFinish"
            >
              <a-row type="flex" :gutter="[20,20]" style="width: 100%;">
                <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                  <a-form-item>
                    <a-input v-model:value="formState3.userid" placeholder="用户ID"></a-input>
                  </a-form-item>
                </a-col>
                <!-- <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                  <a-form-item>
                    <a-select
                      placeholder="请选择性别"
                      ref="select"
                      v-model:value="formState3.gender"
                      style="width: 100%"
                    >
                      <a-select-option value="Male">男</a-select-option>
                      <a-select-option value="Female">女</a-select-option>
                      </a-select>
                    </a-form-item>
                </a-col> -->
                <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                  <a-form-item>
                    <a-button type="primary" html-type="submit">搜索</a-button>
                  </a-form-item>
                </a-col>
              </a-row>  
            </a-form>
            <TableList :list="list" :total="total" @change="change"/>
          </a-tab-pane>
          <a-tab-pane key="2" tab="电影评分查询">
            <a-form
              style="margin-bottom: 20px; width: 100%;"
              :model="formState4"
              name="horizontal_login"
              layout="inline"
              autocomplete="off"
              @finish="onFinish"
            >
              <a-row type="flex" :gutter="[20,20]" style="width: 100%;">
                <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                  <a-form-item>
                    <a-input v-model:value="formState4.rating" placeholder="评分"></a-input>
                  </a-form-item>
                </a-col>
                <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                  <a-form-item>
                    <a-select
                      placeholder="请选择性别"
                      ref="select"
                      v-model:value="formState4.gender"
                      style="width: 100%"
                    >
                      <a-select-option value="Man">男</a-select-option>
                      <a-select-option value="Female">女</a-select-option>
                      </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="12" :sm="8" :md="6" :lg="4" :xl="4">
                  <a-form-item>
                    <a-button type="primary" html-type="submit">搜索</a-button>
                  </a-form-item>
                </a-col>
              </a-row>  
            </a-form>
            <TableList :list="list" :total="total" @change="change" :searchActive="2"/>
          </a-tab-pane>
        </a-tabs>
          
          
      </a-tab-pane>
    </a-tabs>

    


  </div>


</template>
<script setup>
import { HistoryOutlined } from '@ant-design/icons-vue';
import { onMounted, reactive, ref } from "vue";
import { useUserStore } from '@/store/useUser'
import TableList from './list.vue'
import { getRecords, listDefault, showMostHotByGender, listByKeyWord, showMostHotByGenres, listByGenderRating, listByUserId } from '@/api/home'
import { message } from 'ant-design-vue';
const {token, userInfo} = useUserStore()
const activeKey = ref('1')
const searchActive = ref('1')
const current = ref(1)
const total = ref(0)
const pageSize = ref(12)
const formState = reactive({
  keyWord: '',
  genres: ''
})
const formState2 = reactive({
  gender: ''
})

const formState3 = reactive({
  userid: ''
})

const formState4 = reactive({
  gender: '',
  rating: ''
})
const list = ref([])

// 挂载
onMounted(() => {
  init()
})

const changeTab = () => {
  console.log('999', activeKey.value)
  formState.keyWord = ''
  formState.genres = ''
  formState2.gender = ''
  formState3.userid = ''
  formState4.gender = ''
  formState4.rating = ''
  init()
}

const changeTabSmall = () => {
  formState3.userid = ''
  formState4.gender = ''
  formState4.rating = ''
}


// 分页
const change = (page, size) => {
  pageSize.value = size
  current.value = page
  init()
}


// init
const init = () => {
  if (activeKey.value == 1) {
    console.log('---------222', activeKey.value)
    // 浏览记录
    const data = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        userid: Number(token)
      }
    }

    getRecords(data).then(res => {
      if (res.code == 200) {
        total.value = res.total
        list.value = res.data
      } else {
         message.info(res.msg || '服务器内部错误')
      }
    })
  } else if (activeKey.value == 2) {

    // 搜索
    const data = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        username: userInfo.username
      }
    }

    const data1 = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        keyWord: formState.keyWord
      }
    }

    const data2 = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        genres: formState.genres
      }
    }
   
    let str = listDefault
    let post = data

    if (formState.keyWord && !formState.genres) {
      str = listByKeyWord
      post = data1
    } else if (!formState.keyWord && formState.genres) {
      str = showMostHotByGenres
      post = data2

    }

    str(post).then(res => {
      if (res.code == 200) {
        total.value = res.total
        list.value = res.data
      } else {
         message.info(res.msg || '服务器内部错误')
      }
    })



    
  }else if (activeKey.value == 3) {
    // 为你推荐
    const data = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        username: userInfo.username
      }
    }

    const data1 = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        gender: formState2.gender
      }
    }
    const str = !formState2.gender ? listDefault : showMostHotByGender
    const post = !formState2.gender ? data : data1
    str(post).then(res => {
      if (res.code == 200) {
        total.value = res.total
        list.value = res.data
      } else {
         message.info(res.msg || '服务器内部错误')
      }
    }) 
  }else if (activeKey.value == 4) {
    // 查询
    const data = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        username: userInfo.username
      }
    }

    const data1 = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        userid: Number(formState3.userid)
      }
    }
    const data2 = {
      pageSize: pageSize.value,
      pageNum: current.value,
      param: {
        gender: formState4.gender,
        rating: Number(formState4.rating)
      }
    }
    let str = listDefault
    let post = data
    if (searchActive.value == 1) {
      if (formState3.userid) {
        str = listByUserId
        post = data1
      }
    } else {
      if (formState4.gender || formState4.rating) {
        str = listByGenderRating
        post = data2
      }
    }
    str(post).then(res => {
      if (res.code == 200) {
        total.value = res.total
        list.value = res.data
      } else {
         message.info(res.msg || '服务器内部错误')
      }
    })

    
  }
}


// 搜索
const onFinish = () => {
  init()
}



</script>
<style scoped lang="less">
  /deep/.ant-card-body {
    padding: 10px;
  }
</style>