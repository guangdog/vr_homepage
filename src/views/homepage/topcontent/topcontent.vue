<template>
  <div class="top">
    <div class="left">
      <div>
        <topmenu></topmenu>
      </div>
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
import {bannerList} from '../../../api/homepage/homepage'
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
    })
  }
}
</script>
<style scoped>
  .top{
    margin-top: 15px;
    width: 1190px;
    display: flex;
    justify-content: space-between;
  }
  .left{
    position: relative;
    width: 890px;
    height: 360px;
  }
  .left>div:first-child{
    width: 100%;
  }
  .left>div:last-child{
    width: 640px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
  .right{
    width: 296px;
  }
  .banner{
    width: calc(100% - 250px);
    height: 360px;
  }
</style>