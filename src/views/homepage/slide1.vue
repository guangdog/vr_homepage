<template>
	<div>
		<div class="main">
	  	<div class="left">
	  		<div class="tab">
	  			<p style="height: 35px;line-height: 35px;">	
	  				<a><img src="../../assets/images/homepage/tab1.png"/>最新</a>    <a><img src="../../assets/images/homepage/tab2.png"/>AR增强实现</a>    <a><img src="../../assets/images/homepage/tab3.png"/>VR硬件</a>    <a><img src="../../assets/images/homepage/tab4.png"/>虚幻UE4</a>
	  			</p>
		  		<div class="slide1" v-for="data in arr">	
		  			<div class="slide-left" style="position: relative;">
		  				<a style="font-size: 18px;font-family: '微软雅黑';padding: 10px 10px 10px 10px;">{{data.title}}</a>
		  				<p style="font-size: 15px;color: #888;margin-top: 10px;padding: 10px 10px 10px 10px;">{{data.content}}</p>
		  				<div style="width: 70%; color: #888; background: ;position: absolute;bottom: 0px;padding: 10px 10px 10px 10px;">
		  					<a class="qtag">AR|MR</a> 
			          <span style="margin-left: 20px;"> 发布时间：{{data.time}}</span>
								<em style="margin-left: 20px;">{{data.liulan}}人浏览</em>
		  				</div>
		  				
		  			</div>
		  			<div class="slide-right">
		  			  <p><img :src="data.img"/></p>
		  			</div>
			    </div>
	  			
	  		</div>
	  	</div>
	  	
	  	<div class="right">
	  		<div class="qhead_tit">
	  			<a>最新资讯</a>
	  		</div>
	
	  			<ul class="weekly-list" v-for="(data,index) in arr">
	  				<li style="height: 50px;line-height: 50px; list-style-type: square;">
							<div class="app-show-title">
								<a>{{data.title}}</a>  
							</div>		
						</li>
	  			</ul>
				
				<div class="qhead_tit">
	  			<a>最新讨论</a>
	  		</div>
				
					<ul class="weekly-list2" v-for="(data,index) in arr" >
	  				<li style="height: 50px;line-height: 50px; list-style-type: square;">
							<div class="app-show-title">
								<a>{{data.title}}</a>  
							</div>		
						</li>
	  			</ul>
	  	</div>
	  	
	  	
	  
	  </div>
	  
	  <div class="bottom">
	  		<div><img src="../../assets/images/homepage/tab5.png"/></div>
	  		<div><img src="../../assets/images/homepage/tab6.png"/></div>
	  		<div><img src="../../assets/images/homepage/tab7.png"/></div>
	  		<div><img src="../../assets/images/homepage/tab8.png"/></div>
	  		<div><img src="../../assets/images/homepage/tab9.png"/></div>
	  </div>
	  
	  <div class="enlarge">
			<div><img src="../../assets/images/homepage/slide11.png"/></div>
			<div><img src="../../assets/images/homepage/slide12.png"/></div>
			<div><img src="../../assets/images/homepage/slide13.png"/></div>
			<div><img src="../../assets/images/homepage/slide14.png"/></div>
			<div><img src="../../assets/images/homepage/slide15.png"/></div>
			<div><img src="../../assets/images/homepage/slide16.png"/></div>
			<div><img src="../../assets/images/homepage/slide17.png"/></div>
			<div><img src="../../assets/images/homepage/slide18.png"/></div>
   		</div>
	</div>
  
  
  
  
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'},
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'},
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'},
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'},
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'},
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'},
        {'title': '谷歌发表“移动AR设计的最佳做法”', 'content': '谷歌的探索说明了他们是如何调整沉 浸式图形内容以处理适应不同的物理环境和在整个应用会话期间握持手机的需求', 'img': 'https://ss1.baidu.com/6OZ1bjeh1BF3odCf/it/u=2735107996,2635181529&fm=20', 'time': '2017-12-20', 'liulan': '81'}

      ]
    }
  }
}
</script>
<style scoped>
		.main{
			width: 1190px;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			background: white;
			padding-bottom: 20px;
			box-sizing: border-box;
			border: 1px solid #EEE;
		}
		.main .tab{
			padding-left: 10px;
			box-sizing: border-box; 
			width: 825px;
			margin-top: 5px;
		}
		.main .tab p{
			margin-left: 20px;
		}
		.main .tab p a{
			width: 90px;
			height: 35px;
		}
		.main .tab p a:hover{
			border-bottom: 2px solid #4691F3;
			color: #4691F3;
		}
		.main .left{
			width: 825px;
			background: white;
		}
		.main .right{
			width: 350px;
			background: white;
		}
		.slide1{
			width: 788px;
			height: 166px;
			padding: 10px;
		}
		.slide1:hover{
			box-shadow: 2px 5px 10px  darkgrey;;
		}
		.slide-left{
			width: 70%;
			height: 166px;
			float: left;
			background: white;
		}
		.slide-right{
			width: 30%;
			height: 166px;
			line-height: 166px;
			float: right;
			background: white;
		}
		.slide-right p{
			height: 166px;
			line-height: 166px;
		}
		.slide-right img{
			width: 219px;
			height: 150px;
		}
		.qtag {
	    color: #B6B6B6;
	    border: 1px solid #E3E3E3;
	    float: left;
	    width: 74px;
	    height: 22px;
	    padding: 0 3px;
	    text-align: center;
	    line-height: 22px;
	    border-radius: 11px;
		}
		.qtag:hover{
			background: red;
			color: white;
			border: 1px solid red;
		}
		.qhead_tit {
	    margin-top: 20px;
	    padding-left: 10px;
	    height: 16px;
	    line-height: 16px;
	    font-size: 16px;
	    border-left: 3px solid #4691f3;
	    color: #222;
		}
		.right ul{
			box-sizing: border-box;
			padding: 0px 28px;
		}
		.right ul li{
			padding-left: 5%; 
			width: 94%;
			height: 40px;
			list-style-position:inside;
		  list-style-type: square;
		  color: red;
		  padding: 5px 5px;
		}
		.weekly-list li .app-show-title {
	    font-size: 14px;
			padding: 0 10px; 
		}
		.weekly-list2 li:hover{
			height: 40px;
			background: #F5F5F5;
		}
		.weekly-list2 li:hover a{
			color: blue;
		}
		li>div{
			display: inline-block;
			color: black;
		} 
		.bottom{
			width: 1189px;
			height: 100px;
			background: white;
			margin: 0 auto;
			display: flex;
			line-height: 100px;
		}
		.bottom div{
			width: 100%;
			height: 100px;
		}
		.bottom div img{
			width: 90%;
			height: 60%;
			margin-left: 5%;
			margin-top: 10%;
		}
		.enlarge{
			width: 1188px;
			height: 498px;
			background: white;
			margin: 0 auto;
			margin-top: 20px;
			display: flex;	
			flex-wrap: wrap;	
			overflow: hidden;
		}
		.enlarge div{
			overflow: hidden;
			width: 260px;
			height:170px;
			margin: 40px 5px 10px 25px;
		}
		.enlarge div img{
			width: 100%;
			height: 180px;
			cursor: pointer;  
      		transition: all 0.6s;  
		}
		.enlarge div img:hover{  
			transform: scale(1.4);  
		}
</style>