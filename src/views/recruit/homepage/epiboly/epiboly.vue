g<template>
  <div id="box"> 
    <!-- <top></top> -->
    <div class="main">
      <div id="left">
        <left></left>
      </div>
      <div id="right">
        <right></right>
      </div>
    </div>
    <footer1></footer1>
  </div>
</template>

<script>
// import top from './top.vue'
import left from './left.vue'
import right from './right.vue'
import footer1 from './footer.vue'
export default {
  data () {
    return {
      arr: [],
      id: ''
    }
  },
  components: {
    // top,
    left,
    right,
    footer1
  }
}
</script>

<style scoped="scoped">
  *{
    margin: 0 auto;
    padding: 0;
    font-size: 14px;
    list-style: none;
    text-decoration: none;
  }
  #box{
    width: 100%;
    box-sizing: border-box;
    background: #F5F5F5;
  }
  .main{
    width: 1190px;
    display: flex;
    min-height: 300px;
    margin-top: 30px;
  }
  #left{
    width: 188px;
    height: 435px;
    background: white;
    border: 1px solid #E8E8E8;
  }
  #right{
    width: 968px;
    background: white;
    margin-left: 30px;
    border: 1px solid #EDEDED;
  }
</style>