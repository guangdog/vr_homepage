<template>
  <div class="top">
    <div class="left">
      <topmenu></topmenu>
      <div class="banner">
        <topbanner :arr="imgData"></topbanner>
      </div>
    </div>
    <div class="right">
      <topadvert></topadvert>
    </div>
  </div>
</template>
<script>
import topmenu from './menu.vue'
import topbanner from '../../../components/banner.vue'
import topadvert from './advert.vue'

export default {
  components: {
    topmenu,
    topbanner,
    topadvert
  },
  data () {
    return {
      loop: true,
      autoPlay: true,
      imgData: [
        {imgUrl: 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1785421109,2065966285&fm=85&s=82D675844533358E52249511030080C1'},
        {imgUrl: 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=170372157,2737566122&fm=85&s=8712426F884F62CC3E9C95670300E063'}
      ]
    }
  }
}
</script>
<style scoped>
  .top{
    width: 1190px;
    display: flex;
    justify-content: space-between;
  }
  .left{
    width: 74.9%;
    display: flex;
  }
  .right{
    width: 24.9%;
  }
  .banner{
    width: calc(100% - 250px);
    height: 360px;
  }
</style>