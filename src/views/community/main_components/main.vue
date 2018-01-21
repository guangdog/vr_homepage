<template>
	<div class="jinri">
		<ul id="zuo">
			<li>今日:7187</li>
			<li>昨日:1855</li>
			<li>帖子:134768</li>
			<li>会员:53417</li>
			<li>欢迎新会员:</li>
		</ul>
		<ul id="you">
			<li>
				<a href="#">最新回复</a>
			</li>
			<li>
				<a href="#">关注微信</a>
			</li>
		</ul>
		<p id="yx">yxl9926</p>
    <div v-for="data in arr">
        <list :name="data.name" :id="data.id"></list>
    </div>
    
	</div>
</template>

<script>
import list from './list.vue'
import {getModelByPid} from '@/api/community/list'
export default {
  data () {
    return {
      arr: [],
      pid: 0
    }
  },
  created () {
    getModelByPid({pid: this.pid})
    .then(res => {
      this.arr = res.data.data
    })
  },
  components: {
    list: list
  }
}
</script>

<style scoped>
.jinri {
  width: 1190px;
  background: white;
  font-size: 14px;
}
#zuo li {
  color: #666666;
  float: left;
  padding: 5px 20px 5px 10px;
  text-align: center;
  list-style: none;
}
#you li {
  float: right;
  padding: 5px 10px;
  list-style: none;
}
#you li a {
  text-decoration: none;
  color: #9fa19f;
}
#you li a:hover {
  color: #0d58b4;
}
#yx {
  clear: both;
  font-size: 12px;
  padding: 0px 0px 10px 10px;
  color: #a6a19f;
}
</style>