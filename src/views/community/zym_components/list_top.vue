<template>
	<div class="app">
		<div class="top_box">
			<div class="top_up">
				<div class="top_left">
					<a href="#">登录</a>
					<a href="#">立即注册</a>
					<a href="#">QQ登陆</a>
					<a href="#">微信登陆</a>
				</div>
				<div class="top_right">
					<a href="#" class="red" title="每日签到，一天学习好心情！">签到得积分 ！</a>
					<a href="#" class="red">做任务赚积分</a>
					<a href="#" class="orange">QQ群;8229505</a>
					<a href="#" style="color: #999;">积分兑换</a>
					<a>
						<select class="sele" style="color: #999;background: none; border: none;outline: none;">
							<option>联系我们</option>
							<option>版权投诉</option>
							<option>广告投放</option>
						</select>
					</a>
				</div>
			</div>
		</div>
		<div class="top_bottom">
			<div class="nv">
				<img src="static/images/community/top_logo.png"/>
				<div class="nv_left">
					<ul>
						<li>
							<a href="" hidefocus="true" title="Portal">首页</a>
						</li>
						<li>
							<a href="" hidefocus="true">VR资讯</a>
						</li>
						<li>
							<a href="" hidefocus="true">VR教程</a>
						</li>
						<li>
							<a href="" hidefocus="true">招聘外包</a>
						</li>
						<li>
							<a href="" hidefocus="true" style="color: orange">虚幻引擎</a>
						</li>
						<li>
							<a href="" hidefocus="true">VR公开课</a>
						</li>
						<li>
							<a href="" hidefocus="true">VR社区</a>
						</li>
					</ul>
				</div>
				<input type="search" placeholder="请输入搜索内容" style="outline:none" />
				<img class="search" src="static/images/community/search.png" />
			</div>
		</div>
	</div>
</template>

<style scoped="scoped">
.app {
	font-size: 12px;
	
}
.top_box{
	width: 100%;
	background: black;
}
.top_up{
	height: 28px;
	width: 1190px;
	margin: 0 auto;
}
.top_left{
    width: 260px;
    height: 28px;
    line-height: 28px;   
    float: left;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
.top_left a{
	text-decoration: none;
	padding: 0 12px;
	color: #999;
}
.top_left a:hover{
	color: #f86a09;
}
.top_right{
	float: right;
	height: 28px;
    line-height: 28px;
    width: 440px; 
}
.top_right a{
	text-decoration: none;
	padding: 0 2px 0 10px;
}
.red{
	color: red;
}
.red:hover{
	color: #ff7300;
}
.orange{
	color: #ffa504;
}
.orange:hover{
	color: #ff7300;
}
.top_bottom{
	width: 100%;
	height: 170px;
	margin: 0 auto;
	background-image:url(../../../../static/images/community/default.jpg) ;
}
.nv{
	width: 1190px;
	height: 40px;
	margin: 0 auto;
	padding-top: 10px;
	position: relative;
}
.search{
	position: absolute;
	top: 17px;
	right: 45px;
}
.nv img{
	float: left;
}
.nv_left{
	width: 800px;
	height: 40px;
	float: left;
}
.nv_left ul li{
	list-style: none;
	float: left;
	height: 40px;
    line-height: 40px;
    font-weight: 400;
    font-size: 14px;
    margin-right: 5px;
}
.nv_left ul li a{
	float: left;
	text-decoration: none;
	color: white;
	padding: 0 20px;
	height: 40px;
    line-height: 40px;
}
.nv input{
	background: black;
	padding-left: 10px;
	border: none;
	height: 30px;
	color: gray;
	width: 160px;
	border-radius: 20px;
}
</style>