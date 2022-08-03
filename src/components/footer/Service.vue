<template>
  <div class="footer-service">
    <ul class="service-list">
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe793;</i>
          <span>预约维修服务</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe61f;</i>
          <span>7天无理由退货</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe606;</i>
          <span>15天免费换货</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe686;</i>
          <span>满69元包邮</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="iconfont">&#xe619;</i>
          <span>1100余家售后网点</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/config.scss';
  @import '../../assets/style/common.scss';
  .footer-service {
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
    .service-list {
      @include flex();
      li {
        @include size(20%, 25px);
        border-right: 1px solid #e0e0e0;
        text-align: center;
        line-height: 25px;
        &:last-child {
          border-right: none;
        }
        a {
          color: #616161;
          font-size: $fontI;
          .iconfont {
            padding-right: 8px;
            font-size: $fontD;
          }
        }
        &:hover a {
          color: $colorA;
        }
      }
    }
  }
</style>
