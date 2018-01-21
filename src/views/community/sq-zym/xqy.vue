<template>
  <div id="hello">
    <top1 class="top1"></top1>
    <div class="main">
      <left class="left"></left>
        <right class="right"></right>
    </div>
    <footer1 class="footer"></footer1>
  </div>
</template>
 
<script>
import top1 from '../details/detailsTop.vue'
import left from '../details/detailsLeft.vue'
import right from '../details/detailsRight.vue'
import footer1 from '../main_components/footer.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    top1,
    left,
    right,
    footer1
  }
}
</script>

<style scoped>
#hello{
  background: #F5F5F5;
}
.top1{
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
}
.main{
  background: #F5F5F5;
  width: 1190px;
  margin:0 auto; 
}
.left{
  float: left;
}
.right{
  float: left;
}
.footer {
  background: #F5F5F5;
  border-top: 1px solid #EDEDED;
  width: 100%;
  height: 103px;
}
</style>