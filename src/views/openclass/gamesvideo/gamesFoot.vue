<template>
  <div id="app">
    <p>
      <b><a href="#" style="font-size: 12px;">www.52vr.com</a></b>
      <span class="right">
        <a href="#">手机版</a> | 
        <b><a href="#">VR开发网</a></b> | 
        <a href="#">网站地图</a>
        <a href="#">统计</a>  
        <span>津ICP备16006248号</span>
      </span>
    </p>
    <p class="rightBtm">
      GMT+8, 2018-1-5 09:01 AM
    </p>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
a{
  color: #333;
}
.right{
  float: right;
  font-size: 12px;
}
.right >span{
  color: #666;
}
p{
  margin-top: 10px;
}
.rightBtm{
  float: right;
  color: #666;
  font-size: 12px;
}
</style>
