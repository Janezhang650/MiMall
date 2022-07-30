import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(axios, VueAxios)

// 默认基础路径
axios.defaults.baseURL = '/api'
// 请求时间
axios.defaults.timeout = 8000
// 请求拦截处理
axios.interceptors.response.use(response => {
  const res = response.data
  // 如果状态为0，返回请求数据
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) { // 否则跳转到登录页面
    window.location.href = '/#/login'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
