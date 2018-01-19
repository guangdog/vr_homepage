<template>
  <div>
    <div id="content">
      <table>
        <tr>
          <th style="position:relative;">
                      <a class="avatar-point" href="#"></a>
                      <div class="q_f_gg">公告：<a href="http://www.52vr.com/thread-30653-1-1.html" target="_blank"><font color="#FF0000">资源地址失效这里保修</font></a></div>
          </th>
        </tr>
        <tr v-for="data in arr">
          <th style="position: relative;">
            <a href="" class="q_user_avatar"><br />
              <img src="static/images/recruit/img7.gif"/>
              <div class="avatar_bg"></div>
            </a>
            <div id="message">
              <p class="title"><a href="">{{data.type}}</a><a href="">{{data.name}}</a></p>
              <a href="" class="q_thread_view"><span class="count">{{data.pv}}</span></a>
              <p class="dr">
                <a href="">{{data.name}}</a>
                <span class="pipe">|</span>
                <a href="">{{data.created_time}}发表</a>
                <span class="pipe">|</span>
                <a href="">{{data.username}}</a>于
                <a href="">{{data.time2}}</a> 参与评论
                <a href="" class="post">{{data.pl}}</a>
              </p>
            </div>
          </th>
        </tr>
      </table>
    </div>
    <div class="bm pgs cl">
			<span id="visitedforumstmp"><a href="">返&nbsp;回 </a></span>
			<span id="fd_page_bottom">
				<div class="pg">
					<a class="prev" @click="downPage()" v-show='listBypage.page !=1'></a>
					<div id="page" v-for="(data,index) in showpage" v-show="data.isshow"  @click="goPage(index)"><a :class="{active:data.isactive}">{{index+1}}</a ></div>
					<label><input type="text" name="custompage" class="px" size="2" title="输入页码，按回车快速跳转" v-model="listBypage.page" @onkeydown="enter()" />
					<span :title='"共 "+page+"页"'> / {{page}} 页</span></label>
					<a rel="next" class="nxt" @click="nextPage()">下一页</a>
				</div>
			</span>	
		</div>
  </div>
</template>

<script>
import {getdataById} from '@/api/recruit/homepage.js'
import {bus} from '@/bus/bus.js'
export default {
  data () {
    return {
      arr: [],
      range: null,
      id: 0,
      province: null,
      listBypage: {
        page: 1,
        limit: 8
      },
      showpage: [],
      page: 0
    }
  },
  created () {
    this.query()
    bus.$on('send', res => {
      this.range = res.range
      getdataById({page: 1, limit: 4, price_range: this.range}).then((res) => {
        this.arr = res.data.data
      })
    })
    bus.$on('test', res => {
      this.province = res.province
      getdataById({page: 1, limit: 4, sender: this.province}).then((res) => {
        this.arr = res.data.data
      })
    })
  },
  methods: {
    enter () {
      if (event.keyCode === 13) {
      }
    },
    query () {
      getdataById({page: this.listBypage.page, limit: this.listBypage.limit}).then((res) => {
        this.arr = res.data.data
        var count = res.data.count
        this.page = Math.ceil(count / this.listBypage.limit)
        for (var i = 0; i < this.page; i++) {
          this.showpage[i] = {isactive: false, isshow: false}
          if (this.listBypage.page > 3 && this.listBypage.page < (this.page - 2) && i >= (this.listBypage.page - 3) && i < (this.listBypage.page + 2)) {
            this.showpage[i] = {isactive: false, isshow: true}
            this.showpage[(this.listBypage.page - 1)].isactive = true
            this.$forceUpdate()
          }
          if (this.listBypage.page <= 3 && i < 5) {
            this.showpage[i] = {isactive: false, isshow: true}
            this.showpage[(this.listBypage.page - 1)].isactive = true
          }
          if (this.listBypage.page >= (this.page - 2) && i >= (this.page - 5)) {
            this.showpage[i] = {isactive: false, isshow: true}
            this.showpage[(this.listBypage.page - 1)].isactive = true
          }
          this.$forceUpdate()
        }
      })
    },
    nextPage () {
      if (this.listBypage.page < this.page) {
        this.listBypage.page++
        this.query()
      }
    },
    downPage () {
      this.listBypage.page--
      this.query()
    },
    goPage (index) {
      this.listBypage.page = index + 1
      this.query()
    }
  }
}
</script>

<style scoped="scoped">
	.active {
		background-color: #0d58b4 !important;
	    color: white !important;
	}
  *{
    margin: 0 auto;
    padding: 0;
    font-size: 12px;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  a{
    color: #333333;
  }
  #content{
    width: 100%;
    border-bottom: 1px solid #EDEDED;
  }
  #content table{
    width: 100%;
    padding-left: 30px;
  }
  .avatar-point {
      display: block;
      position: absolute;
      width: 12px;
      height: 12px;
      background: url(../../../../../static/images/recruit/img6.png) no-repeat;
      top: 22px;
      left: -40px;
  }
  #content table tr{
      padding: 5px 0;
      border-bottom: 1px solid red;
      /*background: red;*/
  }
  th{
      text-align: left;
      font-weight: 400;
  }
  .pg a.prev {
    width: 25px;
      background-image: url(../../../../../static/images/recruit/img8.gif);
      background-position: 50% 50%;
  }
  .q_f_gg {
      padding: 20px 0;
      color: #ff0000;
      font-size: 14px;
      width: 936px;
  }
  .q_user_avatar {
      display: block;
      position: absolute;
      left: -58px;
      top: 16px;
      z-index: 11;
  }
  .q_user_avatar img {
      display: inline;
      position: absolute;
      top: 2px;
      left:6px;
      width: 39px;
      height: 39px;
      border-radius: 50%;
  }
  #message{
    padding: 20px 0;
      font-size: 14px;
      border-top: 1px solid #ececec;
      width: 936px;
      padding-right: 2%;
  }
  .title a{
    color: #333333;
    font-size: 18px;
    font-weight: 400;
  }
  /*.q_user_avatar .avatar_bg {
      background: url(../../assets/images/img8.png) no-repeat 0px -480px;
      width: 55px;
      height: 55px;
  }*/
  #message .q_thread_view {
      float: right;
      background: url(../../../../../static/images/recruit/img8.png) no-repeat 0px -232px;
      padding-left: 23px;
      margin-top: -23px;
  }
  #message .q_thread_view .count {
      font-size: 22px;
      color: #999;
  }
  .dr{
    margin-top: 10px;
    font-size: 12px;
    color: #999999;
  }
  .dr a{
    font-size: 12px;
    color: #999999;
  }
  .dr .pipe{
    color: #ccc;
       margin: 0 5px;
  }
  #message .post{
      padding-left: 24px;
      margin-left: 10px;
      background: url(../../../../../static/images/recruit/img8.png) no-repeat -148px -240px;
  }
  a:hover{
    color: #0d58b4;
  }
  .bm {
      background: #fff;
      height: 55px;
      padding: 15px;
      padding-left: 500px;
  }
  #visitedforumstmp a {
      padding-left: 22px;
      background-image: url(../../../../../static/images/recruit/img8.gif);
      background-position: 5px 50%;
  }
  .pg {
      /*float: right;*/
  }
  .pg a.nxt, .pgb a {
      padding: 0 10px;
  }
  .pg a, .pg strong, .pgb a, .pg label, .bm a {
      float: left;
      display: inline;
      margin-left: 4px;
      padding: 0 8px;
      height: 26px;
      line-height: 26px;
      border: 1px solid;
      border-color: #EDEDED;
      background-color: #FFF;
      background-repeat: no-repeat;
      color: #333;
      overflow: hidden;
      text-decoration: none;
  }
  .pg a.nxt {
      padding-right: 25px;
      background-image: url(../../../../../static/images/recruit/img9.gif);
      background-position: 90% 50%;
  }
  .pg a:hover, .pgb a:hover, .pg strong {
      background-color: #0d58b4;
      color: white;
  }
  .pg label .px {
      padding: 0;
      width: 25px;
      height: 16px;
      line-height: 16px;
  }
  .px, .pt, .ps, select {
      color: #555;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .bm a:active{
    background: #0d58b4;
    color: white;
  }
</style>