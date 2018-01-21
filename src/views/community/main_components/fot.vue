<template>
	<div id="fot">
		<div id="zaixian">
			<p>在线会员 - 147 人在线 - 5 会员(0 隐藏)，142 位游客 - 最高记录是 5500 于 2018-1-1.</p>
			<ul id="guanli">
				<li>
					<img src="http://www.52vr.com/static/image/common/online_admin.gif" /> 管理员
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_supermod.gif" /> 超级版主
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_moderator.gif" /> 版主
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> 会员
				</li>
			</ul>

			<ul id="sheji">
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> 设计空间
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> qingpingguo007
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> 我的领域
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_admin.gif" /> PeckBang
				</li>
				<li>
					<img src="http://www.52vr.com/static/image/common/online_member.gif" /> hyx19850404
				</li>
			</ul>

		</div>
	</div>
</template>


<style scoped>
.pg {
	position: absolute;
	right: 10px;
	top: -10px;
}
#zaixian {
	font-size: 14px;
	width: 1190px;
	background: white;
	margin: 0 auto;
}
#zaixian p {
	font-weight: bold;
	padding-left: 10px;
	line-height: 40px;
	border-bottom: 1px #ccc solid;
}
#guanli {
	display: flex;
	border-bottom: 1px #ccc solid;
}

#guanli li {
	list-style: none;
	padding: 10px 15px;
}
#sheji {
	display: flex;
}
#sheji li {
	list-style: none;
	padding: 10px 0px 10px 15px;
	margin-right: 90px;
}
</style>