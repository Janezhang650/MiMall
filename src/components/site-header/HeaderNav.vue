<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/config.scss';
  @import '../../assets/style/common.scss';
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
        background: $colorW;
        display: none;
        box-shadow: 0 7px 6px 0 rgba(0, 0, 0, .11);
        z-index: 999;
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
</style>
