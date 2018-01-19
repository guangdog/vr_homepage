<template>
  <div class="advert">
    <img v-for="(item,index) in arr" :key="index" :src="item.url">
  </div>
</template>
<script>
import {homeadsList} from '../../../api/homepage/homepage'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    homeadsList().then(res => {
      this.arr = res.data.data
    })
  }
}
</script>
<style scoped>
.advert{
  word-wrap: break-word;
  width: 296px;
  height: 360px;
}
.advert img{
  float: left;
  width: 100%;
  height: 90px;
}
</style>