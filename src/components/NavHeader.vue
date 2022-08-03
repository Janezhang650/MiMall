<template>
  <div class="header">
    <div class="site-bar">
      <div class="container">
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
      <div class="site-header">
        <div class="container">
          <div class="header-logo">
            <a href="" class="logo"></a>
          </div>
          <ul class="header-nav">
            <li>
              <a href="" class="list-title">Xiaomi手机</a>
              <div class="children">
                <ul class="products">
                  <li class="product-item"  v-for="(product, categoryId) in products" :key="categoryId">
                    <a :href="'/#/product/' + product.id ">
                      <div class="product-pic">
                        <img :src="product.mainImage" :alt="product.subtitle">
                      </div>
                      <div class="product-name">{{product.name}}</div>
                    </a>
                    <div class="product-price">{{product.price | currency }}元</div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="javascript:;" class="list-title">Redmi手机</a>
            </li>
            <li><a href="javascript:;" class="list-title">电视</a></li>
            <li><a href="javascript:;" class="list-title">笔记本</a></li>
            <li><a href="javascript:;" class="list-title">平板</a></li>
            <li><a href="javascript:;" class="list-title">家电</a></li>
            <li><a href="javascript:;" class="list-title">路由器</a></li>
            <li><a href="javascript:;" class="list-title">服务中心</a></li>
            <li><a href="javascript:;" class="list-title">社区</a></li>
          </ul>
          <div class="header-search">
            <input type="text">
            <a href="" class="iconfont">&#xe699;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header',
  data () {
    return {
      username: '',
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  // 过滤器：保证价格不为空
  filters: {
    currency (val) {
      // 如果没有价格，则返回0.00
      if (!val) return 0.00
      return val.toFixed(2)
    }
  },
  methods: {
    // 获取产品列表
    getProducts () {
      this.axios.get('/products', {
        params: {
          categoryId: 1,
          pageSize: 6
        }
      }).then(res => {
        this.products = res.list.splice(0, 6)
      })
    },
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
  @import '../assets/style/common.scss';
  @import '../assets/style/config.scss';
  .header {
    .site-bar {
      @include size(100%, 40px);
      line-height: 40px;
      background: $colorB;
      .container {
        @include flex();
        @include baseContainer();
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
      }
    }
    .site-header {
      position: relative;
      @include size(100%, 100px);
      line-height: 100px;
      .container {
        @include flex();
        @include baseContainer();
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
        .header-nav {
          @include flex(center, center);
          margin-right: -50px;
          li {
            margin-right: 18px;
            .list-title {
              color: #000;
              font-size: $fontI;
            }
            &:hover .list-title {
              color: $colorA;
            }
            .children {
              position: absolute;
              top: 100px;
              left: 0;
              right: 82px;
              height: 220px;
              border-top: 1px solid $colorF;
              line-height: 0;
              text-align: center;
              display: none;
              box-shadow: 0 7px 6px 0 rgba(0, 0, 0, .11);
              .products {
                @include flex(space-between, center);
                margin-left: 156px;
                .product-item {
                  position: relative;
                  a {
                    display: inline-block;
                    font-size: 12px;
                    color: $colorC;
                    .product-pic {
                      margin-top: 32px;
                      width: 190px;
                      box-sizing: border-box;
                      img {
                        display: inline-block;
                        padding-right: 28px;
                        width: 160px;
                      }
                      &:last-child:after{
                        border-right: none;
                      }
                    }
                    .product-name {
                      width: 160px;
                      line-height: 40px;
                    }
                  }
                  .product-price {
                    width: 160px;
                    color: $colorA;
                  }
                  &:after {
                    position: absolute;
                    top: 30px;
                    right: 0;
                    content: '';
                    height: 110px;
                    border-right: solid 1px $colorF;
                  }
                  &:last-child:after {
                    border-right: none;
                  }
                }
              }
            }
            &:hover .children {
              display: block;
            }
          }
        }
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
      }
    }
  }
</style>
