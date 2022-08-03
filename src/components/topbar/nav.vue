<template>
  <div>
    <ul class="topbar-nav">
      <li><a href="javascript:;">小米商城</a><span>|</span></li>
      <li><a href="javascript:;">MIUI</a><span>|</span></li>
      <li><a href="javascript:;">loT</a><span>|</span></li>
      <li><a href="javascript:;">云服务</a><span>|</span></li>
      <li><a href="javascript:;">天星数科</a><span>|</span></li>
      <li><a href="javascript:;">有品</a><span>|</span></li>
      <li><a href="javascript:;">小爱开放平台</a><span>|</span></li>
      <li><a href="javascript:;">企业团购</a><span>|</span></li>
      <li><a href="javascript:;">资质证照</a><span>|</span></li>
      <li><a href="javascript:;">协议规则</a><span>|</span></li>
      <li><a href="javascript:;">下载APP</a><span>|</span></li>
      <li><a href="javascript:;">智能生活</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopbarNav'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/common.scss';
  @import '../../assets/style/config.scss';
  .topbar-nav {
    @include flex(center, center);
    li {
      padding-right: 12px;
      a {
        padding-right: 12px;
        color: $colorM;
      }
      &:hover a {
        color: $colorW;
      }
      span {
        color: $colorL;
        font-size: 12px;
      }
    }
  }
</style>
