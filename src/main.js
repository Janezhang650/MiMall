import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import env from './env'

Vue.config.productionTip = false

Vue.use(axios, VueAxios)

// 默认基础路径(代理)
axios.defaults.baseURL = '/api'
// 根据环境变量设置请求路径
axios.defaults.baseURL = env.baseURL
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
  } else {
    alert(res.msg)
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
