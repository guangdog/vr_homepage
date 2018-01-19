<template>
	<div id="date">
		<div>
			<p>发布截至日期： <DatePicker type="date" style="width: 200px"></DatePicker></p>
		</div>
		<div>
			<button>搜索</button>
		</div>
	</div>
</template>

<style scoped="scoped">
	*{
		margin: 0 auto;
		padding: 0;
		font-size: 12px;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
	}
	#date{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #EDEDED;
		color: #666666;
		padding-left: 35px;
		display: flex;
	}
	#date div:first-child input{
		width: 120px;
		height: 20px;
		border: 1px solid #CCCCCC;
		border-radius: 3px;
	}
	#date div:first-child{
		width: 50%;
		padding-top: 7px;
	}
	#date div:last-child{
		width: 50%;
	}
	#date div:last-child button{
		width: 100px;
		height: 30px;
		background: #DB1205;
		color: white;
		border-radius: 3px;
		border: none;
		margin-top: 15px;
	}
</style>