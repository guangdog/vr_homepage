<template>
  <div id="app">
    <specificNav></specificNav>
    <div class="bo">
      <p>
        <a href="#"><img src="static/images/recruit/home.png" alt=""></a>
        <em>></em>
        <a href="#">VR招聘</a>
      </p>
    </div>
    <div id="box">
      <div class="left">
        <specificLeft></specificLeft>
      </div>
      <div class="right">
        <specificRight></specificRight>
      </div>
    </div>
    <div class="footer">
        <specificFoot class="yiyi"></specificFoot>
    </div>
  </div>
</template>


<script>
import specificNav from './specificNav.vue'
import specificLeft from './specificLeft.vue'
import specificRight from './specificRight.vue'
import specificFoot from './specificFoot.vue'
export default {
  name: 'app',
  components: {
    specificNav,
    specificLeft,
    specificRight,
    specificFoot
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  .yiyi{
    width: 1190px;
    height: 103px;
    margin: 0 auto;
    background: white !important;
  }
  #app{
    background: #f5f5f5
  }
  #box{
    width: 1191px;
    margin: 0 auto;
    background: white;
    min-height: 1030px;
  }
  .bo{
    width: 1191px;
    height: 50px;
    background: white;
    margin: 0 auto;
    color: #666;
    font-size: 12px;
  }
  .bo p{
    margin-left: 195px;
    line-height: 50px;;
  }
  .left{
    width: 190px;
    height: 350px;
    float: left;
  }
  .right{
    width: 1000px;
    float:right;
    border-left: 1px solid #ededed;
  }
  .footer{
    width: 100%;
    background: rgb(247, 243, 243);
    border-top: 1px solid #EDEDED;
  }
</style>
