<template>
  <div class="sidebar">
    <ul class="sidebar-nav">
      <li>
        <a href="">
          <p class="iconfont">&#xeb81;</p>
          <p>手机APP</p>
        </a>
      </li>
      <li>
        <a href="">
          <p class="iconfont">&#xe736;</p>
          <p>个人中心</p>
        </a>
      </li>
      <li>
        <a href="">
          <p class="iconfont">&#xe793;</p>
          <p>售后服务</p>
        </a>
      </li>
      <li>
        <a href="">
          <p class="iconfont">&#xe62b;</p>
          <p>人工客服</p>
        </a>
      </li>
      <li>
        <a href="">
          <p class="iconfont">&#xe603;</p>
          <p>购物车</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/config.scss';
  @import '../assets/style/common.scss';
  .sidebar {
    position: fixed;
    right: 0;
    bottom: 70px;
    z-index: 99;
    .sidebar-nav {
      li {
        @include size(82px, 90px);
        text-align: center;
        border: 1px solid #f5f5f5;
        background: $colorW;
        a {
          display: block;
          padding: 20px 0;
          @include size(100%, 100%);
          color: $colorC;
          font-size: $fontJ;
          box-sizing: border-box;
          .iconfont {
            margin-bottom: 10px;
            font-size: $fontC;
          }
        }
        &:hover a {
          color: $colorA;
        }
      }
    }
  }
</style>
