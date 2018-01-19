<template>
  <div>
  	<div id="footer1">
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
export default {
  name: 'Homepage',
  data () {
    return {
    }
  }
}
</script>
<style scoped="scoped">
	*{
		margin: 0 auto;
		padding: 0;
		/*font-size: 14px;*/
		list-style: none;
		text-decoration: none;
	}
	#footer1{
		width: 100%;
		border-top: 1px solid #EDEDED;
		margin-top: 25px;
	}
	.footer{
     height:50px;
     width:1190px;
     margin:0 auto;
     margin-top:10px;
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