<template>
  <div class="header">
    <div class="site-bar">
      <div class="container">
        <topbar-nav></topbar-nav>
        <topbar-user></topbar-user>
      </div>
      <div class="site-header">
        <div class="container">
          <header-logo></header-logo>
          <header-nav></header-nav>
          <header-search></header-search>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopbarNav from './topbar/nav.vue'
import TopbarUser from './topbar/user.vue'
import HeaderLogo from './site-header/HeaderLogo.vue'
import HeaderNav from './site-header/HeaderNav.vue'
import HeaderSearch from './site-header/HeaderSearch.vue'

export default {
  name: 'nav-header',
  components: {
    TopbarNav,
    TopbarUser,
    HeaderLogo,
    HeaderNav,
    HeaderSearch
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/common.scss';
  @import '../assets/style/config.scss';
  .header {
    height: 140px;
    .site-bar {
      @include size(100%, 40px);
      line-height: 40px;
      background: $colorB;
      .container {
        @include flex();
        @include baseContainer();
      }
    }
    .site-header {
      position: relative;
      @include size(100%, 100px);
      line-height: 100px;
      .container {
        @include flex();
        @include baseContainer();
        height: 100%;
      }
    }
  }
</style>
