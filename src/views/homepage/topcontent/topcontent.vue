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
import {bannerList} from '../../../api/homepage'
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
      imgData: []
    }
  },
  created () {
    bannerList().then(res => {
      this.imgData = res.data.data
      console.log(this.imgData)
    })
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