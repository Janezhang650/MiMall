<template>
  <div>
    <div class="header-search">
      <input type="text">
      <a href="" class="iconfont">&#xe699;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/config.scss';
  @import '../../assets/style/common.scss';
  .header-search {
    position: relative;
    @include size(296px, 55px);
    line-height: 55px;
    box-sizing: border-box;
    .iconfont {
      position: absolute;
      top: 0;
      right: 4px;
      display: inline-block;
      @include size(55px, 54px);
      border: 1px solid $colorF;
      box-sizing: border-box;
      text-align: center;
      font-size: $fontE;
      font-weight: 700;
      &:hover {
        background: $colorA;
        border-color: $colorA;
        color: $colorW;
      }
    }
    input {
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      padding: 0 12px;
      @include size(238px, 54px);
      border: 1px solid $colorF;
      outline: none;
      box-sizing: border-box;
      color: $colorB;
      font-size: $fontJ;
    }
  }
</style>
