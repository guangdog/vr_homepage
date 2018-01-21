<template>
  <div id="hello">
    <banner1 class="banner"></banner1>
    <img1 class="img1"></img1>
    <main1 class="main"></main1>
    <fot class="fot"></fot>
    <footer1 class="footer"></footer1>
  </div>
</template>
 
<script>
import banner1 from './main_components/banner.vue'
import img1 from './main_components/img.vue'
import main1 from './main_components/main.vue'
import fot from './main_components/fot.vue'
import footer1 from './main_components/footer.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    banner1,
    img1,
    main1,
    fot,
    footer1
  }
}
</script>

<style scoped>
#hello {
  background: #F5F5F5;
}
.top1 {
  width: 100%;
  height: 164px;
}
.banner {
  width: 1190px;
  height: 310px;
  margin: 0 auto;
}
.img1 {
  width: 1190px;
  height: 103px;
  margin: 0 auto;
}
.main {
  width: 1190px;
  margin: 0 auto;
  margin-bottom: 8px;
}
.fot{
  width: 1190px;
  height: 126px;
  margin: 0 auto;
}
.footer {
  border-top: 1px solid #EDEDED;
  clear: both;
  width: 100%;
  height: 103px;
}
</style>