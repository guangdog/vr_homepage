<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in arr" :key="index"><img :src="item.url"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"></div>
  </swiper>
</template>
 
<script>
export default {
  props: ['arr'],
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // console.log('this is current swiper instance object', this.swiper)
  }
}
</script>
<style scoped>
.swiper-container,.swiper-wrapper{
  width: 100%;
  height: 100%;
}
.swiper-wrapper .swiper-slide{
  width: 100%;
  height: 100%;
}
img{
  width: 100%;
  height: 100%;
}
</style>
