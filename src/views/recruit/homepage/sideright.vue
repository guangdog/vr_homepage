<template>
  <div class="box">
    <div id="top">
      <p>外包信息<span><router-link to="recruit/epiboly/11">更多外包</router-link></span></p>
    </div>
    <div id="content">
      <ul>
        <li v-for="(data,index) in arr" v-on:click="partentMain(data.id)" @click="getdatas(data.id)">
          <p id="p1">{{data.name}}</p>
          <p id="p2">{{data.created_time}} <span style="font-size: 11px;">已有{{data.pv}}人浏览</span></p>
          <p id="p3">{{data.desc}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getdataById} from '@/api/recruit/homepage.js'
export default {
  data () {
    return {
      arr: [],
      id: '',
      time: ''
    }
  },
  created () {
    getdataById({page: 1, limit: 5}).then((res) => {
      this.arr = res.data.data
    })
  },
  methods: {
    partentMain (index) {
    },
    getdatas (id) {
      this.$router.push('recruit/specific/' + id)
    }
  }
}
</script>
<style scoped="scoped">
  .box{
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
  }
  #top{
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  #top span a{
    float: right;
    color: #469FF6;
  }
  #content{
    width: 100%;
  }
  #p1{
    width: 100%;
    color: #299DD8;
    background: url(../../../../static/images/recruit/img1.png) left center no-repeat;
    padding-left: 7px;
  }
  #p2{
    padding: 7px;
    font-size: 11px;
    margin-top: 10px;
  }
  #p2 span{
    float: right;
  }
  #p3{
    padding: 7px;
    font-size: 10px;
    line-height: 18px;
  }
  #content ul{
    width: 100%;
  }
  #content ul li{
    color: #666666;
    height: 180px;
    padding: 20px 5px;
    overflow: hidden;
  }
  #content ul li:hover{
    background: #F4F4F4;
  }
</style>
