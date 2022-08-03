import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Detail from './pages/detail.vue'
import Product from './pages/product.vue'
import Order from './pages/order.vue'
import OrderList from './pages/OrderList.vue'
import OrderConfirm from './pages/OrderConfirm.vue'
import OrderPay from './pages/OrderPay.vue'
import Alipay from './pages/alipay.vue'
import Cart from './pages/cart.vue'
import Login from './pages/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: '/product/:id',
          name: 'product',
          component: Product
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'list',
          name: 'orderList',
          component: OrderList
        },
        {
          path: 'confirm',
          name: 'orderConfirm',
          component: OrderConfirm
        },
        {
          path: 'pay',
          name: 'orderPay',
          component: OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: Alipay
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
