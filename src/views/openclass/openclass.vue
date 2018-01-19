<template>
  <div>
    <div class="main">
      <div class="logins">
        <!--<router-link to="">
            <img src="../assets/images/104905aowhs0yuoz9vohvs.gif">
        </router-link>-->
        <opensearch></opensearch>
      </div>
      <div class="main_class">
          <aboutclass></aboutclass>
      </div>
      <div class="main_content">
          <audios :key="index" v-for="(item, index) in data" :id="item.id" :name="item.name"  ></audios>
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
</template>
<script>
import opensearch from './opensearch.vue'
import aboutclass from './aboutclass.vue'
import audios from './audios.vue'
import { getopencategories } from '@/api/openclass/openclass'
export default {
  components: {
    opensearch,
    aboutclass,
    audios
  },
  data () {
    return {
      data: []
    }
  },
  created () {
    getopencategories({parent_id: 0}).then((res) => {
      this.data = res.data.data
    })
  }
}
</script>
<style scoped>
  .main {
    width: 100%;
    background: #f5f5f5;
    box-sizing: border-box;
  }
  .main .logins{
    width:1190px;
    height: 60px;
    margin:0 auto;
    margin-bottom: 40px;
  }
  .main .login img{
    width:100%;
  }
  .main .main_class{
    width:1190px;
    height: 540px;
    margin:0 auto;
    margin-top:20px;
    background:white;
    padding:20px;
    box-sizing: border-box;
  }
  .main .main_content{
     width:1190px;
    margin:0 auto;
  }

  .footer {
    height: 50px;
    width: 1190px;
    margin: 0 auto;
    margin-top: 20px;
    box-sizing: border-box;
    display: flex;
    font-size: 12px;
  }
  .footer div:first-child {
    width: 60%;
    font-weight: bold;
  }
  .footer div a {
    color: #333333;
    text-decoration: none;
  }
  .footer div:last-child {
    width: 40%;
    text-align: right;
  }
  .footer div:last-child p {
    line-height: 20px;
  }
  .pipe {
    margin: 0 5px;
    color: #ccc;
  }
  .footer div a:hover {
    color: #0d58b4;
  }


</style>
