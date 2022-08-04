<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in swiperList" :key="item.id">
            <a :href="'/product/' + item.id">
              <img :src="item.url" alt="">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperList: [
        {
          id: 1,
          url: '/images/swiper1.jpeg'
        },
        {
          id: 2,
          url: '/images/swiper2.jpeg'
        },
        {
          id: 3,
          url: '/images/swiper3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .index {
    .container{
      .swiper-box {
        height: 451px;
        .swiper-container {
          height: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
