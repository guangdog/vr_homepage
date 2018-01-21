<template>
  <div id="app">
    <div class="imgBox">
      <div class="imgBorder"><!--<img class="img" src="../../assets/images/tj-1.jpg" alt="">--></div>
    </div>
    <div class="vip">
      <b><a href="">梦途科技</a></b>
      <a href="" style="font-size: 12px;">终极会员</a>
    </div>


    <div class="fenlei">
      <div>
        <p>3</p>
        <p>主题</p>
      </div>
      <div>
        <p>564</p>
        <p>积分</p>
      </div>
      <div>
        <p>0</p>
        <p>专家分</p>
      </div>
    </div>
    <div class="zhuyi">
      <p>兴趣点（最多三项）:</p>
      <p>Unity引擎</p>
      <p>VR头盔</p>
      <p>VR互动软件</p>
    </div>
    <div class="sixin">
      <a href="#">私信</a>
    </div>
  </div>
</template>


<style scoped>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
#app{
  background: white;
  height: 500px;
  width: 190px;
}
.imgBox{
  width: 100%;
  height: 150px;
  padding-top: 30px;
}
.imgBorder{
  width: 148px;
  height: 148px;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  box-shadow: 1px 0px 8px #d6cbcb;
}
.img{
  width: 128px;
  margin-top: 10px;
  height: 128px;
  border-radius: 50%;
}
.vip{
  width: 100%;
  margin-top: 20px;
}
.vip a{
  display: block;
  text-align: center;
  line-height: 25px;
  color: #333;
}
.vip a:hover{
  color: rgb(20, 20, 201)
}
.fenlei{
  width: 90%;
  margin: 0 auto;
  height: 56px;
  border-radius: 5px;
  background: rgb(241, 241, 241);
  display: flex;
}
.fenlei >div{
  width: 33.3%;
  height: 36px;
  text-align: center;
  color: #666;
  margin-top: 10px;
}
.fenlei >div:nth-child(1) ,.fenlei >div:nth-child(2){
  border-right: 1px solid #666;
}
.fenlei >div p{
  line-height: 18px;
  font-size: 12px;
}
.zhuyi{
  font-size: 12px;
  text-align: center;
}
.zhuyi p{
  line-height: 20px;
  color: #666
}
.zhuyi p:nth-child(2){
  margin-top: 5px;
}
.sixin{
  color: #666;
  font-size: 12px;
  margin-left: 20px;
}
</style>
