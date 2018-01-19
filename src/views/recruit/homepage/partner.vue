<template>
  <div class="tj">
      <div class="zt">
        <div class="tb">
          <p>招聘企业推荐</p>
        	<div class='aaa more'><a href="#" target="_blank">更多招聘企业</a></div>
        </div>
        <div class="tp">
          <ul>
           <li v-for="item in arr">
           <a :href="item.company_url">
        		  <div class="thumbnail">
                <img :src="item.images"/>
                <div class="befores">
                  <h3>{{item.company_name}}</h3>
                </div>

               </div>
            </a>
          	</li>
          </ul>
          </div>
      </div>
  </div>
</template>

<script>
import {getcompony} from '@/api/recruit/homepage.js'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    getcompony().then((res) => {
      this.arr = res.data.data
    })
  }
}
</script>
<style scoped>
  * {
  	margin: 0;
  	padding: 0;
  }
  
  .tj {
  	width: 842px;
  	height: 800px;
  }
  
  .tb {
  	width: 842px;
  	height: 40px;
  }
  
  .tb p {
  	margin-left: 12px;
  	margin-top: 10px;
  	font-size: 14px;
  	font-weight: bold;
  	float: left;
  }
  
  .tb a {
  	margin-left: 660px;
  	font-size: 12px;
  	text-decoration: none;
  	margin-top: 20px;
  	margin-right: 2px;
  	color: #000000;
  }
  
  .zt {
  	background: #fff;
  	height: 709px;
  	margin-top: 10px;
  	color: #666;
  }
  
  .tp {
  	margin-left: 10px;
  }
  
  .tp img {
  	width: 95px;
  	height: 95px;
  	margin-top: 30px;
  	margin-left: 20px;
  	margin-right: 8px;
  }
  
  .tp ul {
  	list-style: none;
  }
  
  .tp ul li {
  	float: left;
  	margin-left: 10px;
  }
  
  .thumbnail {
  	position: relative;
  	vertical-align: middle;
  }
  
  .befores {
  	box-sizing: border-box;
  	line-height: 20px;
  	color: white;
  	text-align: center;
  	width: 100%;
  	height: 100px;
  	position: absolute;
  	left: 5px;
  	top: 10px;
  	overflow: hidden;
  	transition: all 0;
  	opacity: 0.3;
  	display: none;
  	background: #2d8cf0;
  }
  
  .befores h3 {
  	margin-top: 50%;
  	transform: translateY(-50%);
  	box-sizing: border-box;
  	padding: 0 10%;
  }
  
  .thumbnail:hover .befores {
  	display: block;
  	color: whitesmoke;
  	height: 100%;
  	opacity: 0.3;
  	transition: all 0;
  	z-index: 500;
  }
  
  .more {
  	padding-top: 10px;
  }
</style>
