<template>
  <div>
    <div class="header-logo">
      <a href="" class="logo"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/config.scss';
  @import '../../assets/style/common.scss';
  .header-logo {
    @include size(55px, 55px);
    border-radius: 17px;
    overflow: hidden;
    .logo {
      display: inline-block;
      @include size(110px, 55px);
      background: $colorA;
      &::before {
        content: '';
        display: inline-block;
        @include bgImg(55px, 55px, url('/images/mi-logo.png'), contain);
        transition: margin .2s;
      }
      &::after {
        content: '';
        display: inline-block;
        @include bgImg(55px, 55px, url('/images/mi-home.png'), contain);
      }
      &:hover::before {
        margin-left: -55px;
      }
    }
  }
</style>
