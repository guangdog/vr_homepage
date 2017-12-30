<template>
  <div class="content">
    <div class="top">
      <div>
        <p>分类目录</p>
        <div>
          <a>Unity</a><a>Unity</a>
          <a>Unity</a><a>Unity</a>
          <a>Unity</a><a>Unity</a>
          <a>Unity</a><a>Unity</a>
          <a>Unity</a><a>Unity</a>
          <a>Unity</a><a>Unity</a>
          <a>Unity</a>
        </div>
      </div>
      <div>
        <a><img :src="menuimg"></a>
      </div>
    </div>

    <div class="bottom">
      <div>
        <P>最新文章</P>
        <ul>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
        </ul>
      </div>
      <div>
        <P>最新讨论</P>        
        <ul>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
          <li><a>【教程】如何申请加入微软</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['menuimg'],
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.content{
  width: 560px;
  height: 318px;
  padding: 20px 40px;
}
.top{
  width: 100%;
  display: flex;
  justify-content: space-between
}
.top>div:first-child{
  width: 336px;
}
.top>div:first-child p{
  color: #4691f3;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
.top>div:first-child>div>a{
  display: inline-block;
  width: 85px;
  margin: 8px 10px 0;
  color: #000;
}
.top>div:last-child{
  width: 185px;
  height: 136px;
}
.bottom{
  margin-top: 10px;
  display: flex;
  width: 560px;
  height: 159px;
}
.bottom p{
  padding: 0 10px;
  height: 32px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  overflow: hidden;
  color: #ff7a02 !important;
  margin: 0; 
}
.bottom li{
  padding-left: 10px;
  margin-right: 50px;
  width: 180px;
  height: 1.5em;
  overflow: hidden;
  line-height: 2em;
  background: url(http://www.52vr.com/template/qu_business/images/dot.png) no-repeat 0 50%;
}
.bottom li a{
  padding-left: 8px;
}
</style>
