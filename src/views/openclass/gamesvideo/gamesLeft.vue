<template>
  <div id="app">
    <div class="imgBox">
      <div class="imgBorder"><img class="img" src="@/assets/images/recruit/img7.gif" alt=""></div>
    </div>
    <div class="vip">
      <b><a href="">完美教室</a></b>
      <a href="" style="font-size: 12px;">正式会员</a>
    </div>
    <div class="fenlei">
      <div>
        <p>9</p>
        <p>主题</p>
      </div>
      <div>
        <p>95</p>
        <p>积分</p>
      </div>
      <div>
        <p>0</p>
        <p>专家分</p>
      </div>
    </div>
    <!--<div class="zhuyi">
      <p>兴趣点（最多三项）:</p>
      <p>Unity引擎</p>
      <p>VR头盔</p>
      <p>VR互动软件</p>
    </div>-->
    <p style="margin-top: 5px;">
    	<span class="pbg2"  id="upgradeprogress_143958" onmouseover="showMenu({'ctrlid':this.id, 'pos':'12!', 'menuid':'g_up143958_menu'});">
    		<span class="pbr2" style="width:93%;"></span>
    	</span>
    </p>
    <p style="text-align: center; margin-top: 5px;">：</p>
		<dl class="q_sixin cl">
			<dt>私信</dt>
			<dd><a href="" onclick="showWindow('sendpm', this.href);" title="发消息"></a></dd>
		</dl>    
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
	  padding-top: 70px;
	}
	.imgBox{
	  width: 100%;
	  height: 150px;
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
	  margin-top: 10px;
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
	  background: #F8F8F8;
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
	  border-right: 1px solid #CCCCCC;
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
	.pbg2 {
	    display: block;
	    height: 10px;
	    width: 130px;
	    margin: 0 auto;
	    background: url(../../../../static/images/recruit/range.png) 0 -10px repeat-x;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    border-radius: 5px;
	}
	.pbr2 {
	    display: block;
	    height: 10px;
	    background: url(../../../../static/images/recruit/range2.png) 0 0 repeat-x;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    border-radius: 5px;
	}
	.q_sixin {
    width: 150px;
    margin: 5px 10px 5px 30px;
    display: flex;
	}
	.pls dd {
    width: 70px;
    display: block;
    -webkit-margin-start: 40px;
	}
	.pls dd, .pls dt {
	    float: left;
	    overflow: hidden;
	    height: 1.6em;
	    line-height: 1.6em;
	}
	.q_sixin dt {
    width: 35px;
    line-height: 17px;
	}
	.pls dt {
	    margin-right: 3px;
	    width: 55px;
	}
	.q_sixin dd a {
    display: inline-block;
    width: 15px;
    height: 12px;
    background: url(../../../../static/images/recruit/sixin.png) 0 -15px no-repeat;
	}
</style>
