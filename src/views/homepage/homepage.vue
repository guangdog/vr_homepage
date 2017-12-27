<template>
  <div class="content">
    <hometop></hometop>
	  <slide1></slide1>
  </div>
</template>
<script>
import hometop from './topcontent/topcontent.vue'
import slide1 from './slide1.vue'

export default {
  components: {
    hometop,
    slide1
  }
}
</script>
<style scoped>
  .content{
    width: 1190px;
    margin: 0 auto;
  }
</style>