<template>
  <div id="app">
    <gamevideoNav></gamevideoNav>
    <div class="bo">
      <!--<p>
        <a href="#"><img src="static/images/recruit/home.png" alt=""></a>
        <em>></em>
        <a href="#">VR招聘</a>
      </p>-->
      <div id="pt" class="bm cl" style="margin: 10px 0 10px 193px; background: #fff;">
				<div class="z">
				<a class="nvhm" title="首页">VR开发网</a><em>&raquo;</em>
				<a style="margin-top: 7px;">VR公开课</a>
				</div>
			</div>
    </div>
    <div id="box">
      <div class="left">
        <gamesLeft></gamesLeft>
      </div>
      <div class="right">
        <gamesRight></gamesRight>
      </div>
    </div>
    <div class="footer">
        <gamesFoot class="yiyi"></gamesFoot>
    </div>
  </div>
</template>


<script>
import gamevideoNav from './gamevideoNav.vue'
import gamesLeft from './gamesLeft.vue'
import gamesRight from './gamesRight.vue'
import gamesFoot from './gamesFoot.vue'
export default {
  components: {
    gamevideoNav,
    gamesLeft,
    gamesRight,
    gamesFoot
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  .yiyi{
    width: 1190px;
    height: 103px;
    margin: 0 auto;
    background: white !important;
  }
  #app{
    background: #f5f5f5
  }
  #box{
    width: 1191px;
    margin: 0 auto;
    background: white;
    min-height: 1030px;
  }
  #pt .z a, #pt .z em, #pt .z span {
    float: left;
    height: 29px;
	}
	.nvhm{
    width: 16px;
    background: url(../../../../static/images/recruit/search.png) no-repeat 0 0;
    line-height: 200px;
    overflow: hidden;
	}
	a{
	  color: #333;
	}
	#pt .z em {
    width: 20px;
    background: url(../../../../static/images/recruit/pt_item.png) no-repeat 3px 10px;
    line-height: 200px;
    overflow: hidden;
	}
  .bo{
    width: 1191px;
    height: 50px;
    background: white;
    margin: 0 auto;
    color: #666;
    font-size: 12px;
  }
  .bo p{
    margin-left: 195px;
    line-height: 50px;;
  }
  a:hover{
  	color: #0d58b4;
  }
  .left{
    width: 190px;
    height: 350px;
    float: left;
  }
  .right{
    width: 1000px;
    float:right;
  }
  .footer{
    width: 100%;
    background: rgb(247, 243, 243);
    border-top: 1px solid #EDEDED;
  }
</style>
