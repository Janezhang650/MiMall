<template>
  <div>
    <ul class="topbar-user">
      <li>
        <a href="javascript:;" v-if="username === ''" @click="getLogin">登录</a>
        <a href="javascript:;" v-else>{{ username }}</a>
        <span>|</span>
      </li>
      <li v-if="username === ''"><a href="javascript:;">注册</a><span>|</span></li>
      <li v-if="username"><a href="javascript:;" @click="goToOrder">我的订单</a><span>|</span></li>
      <li><a href="javascript:;">消息通知</a><span>|</span></li>
      <li class="cart"><a href="javascript:;" @click="goToCart"><em class="iconfont">&#xe603;</em>购物车</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopbarUser',
  data () {
    return {
      username: ''
    }
  },
  mounted () {},
  methods: {
    // 跳转到登录页面
    getLogin () {
      this.$router.push('/login')
    },
    // 跳转到购物车页面
    goToCart () {
      this.$router.push('/cart')
    },
    // 跳转到订单页面
    goToOrder () {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/config.scss';
  @import '../../assets/style/common.scss';
  .topbar-user {
    @include flex(center, center);
    li {
      padding-right: 12px;
      a {
        padding-right: 12px;
        color: $colorM;
        .iconfont {
          display: inline-block;
          padding-right: 4px;
        }
      }
      &:hover a {
        color: $colorW;
      }
      span {
        color: $colorL;
        font-size: 12px;
      }
      &:last-child {
        padding-left: 12px;
        padding-right: 0;
      }
    }
    .cart:hover {
      background: $colorW;
      a {
        color: $colorA;
      }
    }
  }
</style>
