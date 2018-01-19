<template>
  <div id="app">
    <div id="box">
      <p><b>推荐招聘</b><span><a href="#">更多推荐岗位</a></span></p>
      <div class="zp_tab1" v-for="data in arr">
        <span class="zp_tab2"><a href="#">{{data.name}}</a></span>
        <span class="zp_tab3">{{data.create_company}}</span>
        <span class="zp_tab4">待遇:
          <span>{{data.salaray_range}}</span>
        </span>
        <span class="zp_tab5">
          <span>{{data.create_time.slice(0,10)}}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import {getposition} from '@/api/recruit/homepage.js'
export default {
  data () {
    return {
      arr: []
    }
  },
  created () {
    getposition().then((res) => {
      this.arr = res.data.data.slice(10, 20)
    })
  }
}
</script>

<style scoped="scoped">
  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    text-decoration: none;
  }
  #box p {
    padding: 0 20px;
    width: 100%;
    height: 39px;
    line-height: 39px;
    box-sizing: border-box;
  }
  #box p span {
    float: right;
  }
  #box p span a {
    color: black;
    font-size: 12px;
  }
  #box p b {
    color: #666;
  }
  #box p span a:hover {
    color: rgb(35, 35, 236);
  }
  /* box */
  #box {
    /* padding: 0 14px 0 20px; */
    width: 850px;
    box-sizing: border-box;
  }
  .zp_tab1 {
    position: relative;
    width: 375px;
    height: 83px;
    font-size: 14px;
    color: #000;
    border: 1px solid #fff;
    float: left;
  }
  .zp_tab1:nth-child(2n + 0) {
    margin-left: 30px;
  }
  .zp_tab1:hover {
    border: 1px solid #4691f3;
  }

  .zp_tab2 {
    position: absolute;
    top: 16px;
    left: 2px;
    font-size: 14px;
    display: block;
    width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .zp_tab2 a {
    color: #299dd8;
  }
  .zp_tab3 {
    position: absolute;
    top: 54px;
    left: 10px;
    font-size: 12px;
  }
  .zp_tab4 {
    position: absolute;
    top: 20px;
    left: 250px;
    font-size: 12px;
  }
  .zp_tab4 span,
  .zp_tab5 span {
    color: #ff7a02;
    font-size: 12px;
  }
  .zp_tab5 {
    position: absolute;
    top: 54px;
    left: 250px;
    font-size: 12px;
  }
</style>
