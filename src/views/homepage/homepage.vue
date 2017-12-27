<template>
  <div class="content">
    <hometop></hometop>
  </div>
</template>
<script>
import hometop from './topcontent/topcontent.vue'
export default {
  components: {
    hometop
  }
}
</script>
<style scoped>
  .content{
    width: 1190px;
    margin: 0 auto;
  }
</style>