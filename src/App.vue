<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 请求加载本地 mock
    // this.axios.get('/mock/user/login.json').then(res => {
    //   this.res = res
    // })
    // fast-mock平台
    this.axios.get('/user/login').then(res => {
      this.res = res
    })
    // 集成MOCK API- mock.js拦截
    // this.axios.get('./mock/api.js').then(res => {
    //   this.res = res
    // })
  }
}
</script>

<style>
</style>
