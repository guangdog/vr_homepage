<template>
  <div class="img">
    <p  v-for="data in arr">
       <img :src="data.url" alt="data.tooltip">
    </p>
    
  </div>
</template>

<script>

import {imgList} from '@/api/community/list'

export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    imgList().then(res => {
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped>
.img{
  margin-top: 12px;
  margin-bottom: 6px;
}
</style>
