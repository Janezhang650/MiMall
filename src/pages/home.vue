<template>
  <div>
    <nav-header></nav-header>
    <sidebar></sidebar>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter,
    Sidebar
  }
}
</script>
