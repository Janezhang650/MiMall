<template>
  <div class="footer">
    <div class="contanier">
      <footer-service></footer-service>
      <footer-links></footer-links>
    </div>
    <site-info></site-info>
  </div>
</template>
<script>
import FooterService from './footer/Service.vue'
import FooterLinks from './footer/Links.vue'
import SiteInfo from './footer/SiteInfo.vue'

export default {
  name: 'nav-footer',
  components: {
    FooterService,
    FooterLinks,
    SiteInfo
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/common.scss';
  .footer {
    margin-top: 20px;
    .contanier {
      @include baseContainer();
    }
  }
</style>
