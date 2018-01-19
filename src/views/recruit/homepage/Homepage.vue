<template>
<div>
  <div class="main">
    <div class="titles">
    	<a href="#"><img src="static/images/recruit/home.png"/></a>
			<span><img src="static/images/recruit/img2.png"/></span>
			<a href="#" style="margin-left: 3px;">人才招聘</a>
			<span style="float: right; margin-top: 3px;"><a href="#"><img src="static/images/recruit/QQ.png"/></a></span>
    </div>
    	<div style="clear: both;"></div>
      <div class="main_content">
        <div class="main_content_left">
          <div class="search">
            <mainsearch></mainsearch>
          </div>
          <div class="search_content">
              <searchcontent >
              </searchcontent>
          </div>
          <div class="partner">
              <partner></partner>
          </div>
          <div class="footers">
            <footers></footers>
          </div>
        </div>
        <div class="main_content_right">
          <sideright></sideright>
        </div>
    </div>

  <div class="footer">
  	<div>
  		<a href="#">www.52vr.com</a>
  	</div>
  	<div style="float: right;">
  		<p>
  			<a href="#">手机版</a><span class="pipe">|</span> <b><a href="#">VR开发网</a></b><span class="pipe">|</span>
  			<a href="#">网站地图</a><a href="#" style="margin-left: 5px;">统计</a>
  			<span style="margin-left: 5px;">津ICP备16006248号</span>
  		</p>
  		<p>GMT+8, 2017-12-28 09:47 AM</p>
  	</div>
  </div>
  </div>
</div>
</template>
<script>
import footers from './footers.vue'
import mainsearch from './mainsearch.vue'
import partner from './partner.vue'
import sideright from './sideright.vue'
import searchcontent from './searchcontent.vue'
export default {
  name: 'Homepage',
  components: {
    mainsearch,
    footers,
    partner,
    sideright,
    searchcontent
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .main{
    width: 100%;
    height:2091px;
    background: #f5f5f5;
  }
  .main .titles{
  	box-sizing: border-box;
    width:1190px;
    height:33px;
    line-height: 33px;
    margin: 0 auto;
    padding-right: 10px;
   }
  .main .titles a{
  		color: #333333;
  		font-size: 12px;
  		text-decoration: none;
  }
  .main .titles a:hover{
  	color: #0d58b4;
  }
  .main .main_content{
     width:1190px;
     height: 1985px;
     margin: 0 auto;
     background:#f5f5f5;
     overflow: hidden;
   }
   .main .main_content .main_content_left{
     height: 1985px;
     width:842px;
     background:#f5f5f5;
     float:left;
   }
   .main .main_content .main_content_left .search{
     width:100%;
     height: 65px;
     background:white;
   }
   .main .main_content .main_content_left .search_content{
     margin-top:20px;
     width:100%;
     height: 680px;
    background:white;
   }
   .main .main_content .main_content_left .partner{
    margin-top:10px;
    width:100%;
    height:715px;
    background:#f5f5f5;
   }
   .main .main_content .main_content_left .footers{
     margin-top:20px;
    width:100%;
    height:475px;
    background:white;
   }
   .main .main_content .main_content_right{
     height:1081px;
     width:320px;
     background:white;
     margin-left:28px;
     float:left;
   }
    .footer{
     height:50px;
     width:1190px;
     margin:0 auto;
     margin-top:20px;
  	 box-sizing: border-box;
  	 display: flex;
  	 font-size: 12px;
   }
   .footer div:first-child{
   	width: 60%;
   	font-weight: bold;
   }
   .footer div a{
   	color: #333333;
   	text-decoration: none;
   }
   .footer div:last-child{
   	width: 40%;
   	text-align: right;
   }
   .footer div:last-child p{
   	line-height: 20px;
   }
   .pipe {
    margin: 0 5px;
    color: #CCC;
	}
	.footer div a:hover{
		color: #0d58b4;
	}
</style>
