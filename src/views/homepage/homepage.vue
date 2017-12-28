<template>
  <div class="content">
    <hometop></hometop>
	  <slide1></slide1>
	  <slide2></slide2>
	  <slide3></slide3>
	  <slide4></slide4>
  </div>
</template>
<script>
import hometop from './topcontent/topcontent.vue'
import slide1 from './slide1.vue'
import slide2 from './slide2.vue'
import slide3 from './slide3.vue'
import slide4 from './slide4.vue'

export default {
  components: {
    hometop,
    slide1,
    slide2,
    slide3,
    slide4
  }
}
</script>
<style scoped>
  .content{
    width: 1190px;
    margin: 0 auto;
  }
</style>