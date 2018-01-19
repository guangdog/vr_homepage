<template>
  <div id="app">
    <div id="nav">
      <input placeholder="请输入搜索内容" type="text" style="outline:none;" class="txt" v-model="texts">
      <select name="" id="" class="slc" style="outline:none;" v-model="options" >
        <option value="gw">岗位</option>
        <option value="rc">人才</option>
        <option value="qy">企业</option>
      </select>
      <button class="btn_ss" style="outline:none;" @click="seas()">搜   索</button>
      <a href="#" class="jl">登记简历</a>
      <a href="#" class="qy">登记企业</a>
    </div>
  </div>
</template>

<script>
import {bus} from '@/bus/bus.js'
export default {
  data () {
    return {
      texts: '',
      options: 'gw'
    }
  },
  methods: {
    seas () {
      bus.$emit('send', {texts: this.texts, options: this.options})
    }
  }
}
</script>
<style scoped>
  *{
    text-decoration: none;
    font-size: 14px;
  }

  #app{
    width: 100%;
    padding: 0 10px;
  }
  #nav{
    width: 100%;
    height:65px;
    position: relative;
  }
  .txt{
    margin-top: 10px;
    width:447px;
    height: 45px;
    border: none;
    padding: 0 0 0 10px;
    border: 1px solid #db1205;
    border-right: none;
    box-sizing: border-box;
  }
  .slc{
    height:45px;
    width: 60px;
    text-align: center;
    position: absolute;
    left: 387px;
    top: 10px;
    border-top: 1px solid #db1205;
    border-bottom: 1px solid #db1205;
    border-right: 1px solid #db1205;
    background: #f5f5f5;
  }
  .btn_ss{
    position: absolute;
    left: 447px;
    height:45px;
    width: 100px;
    top: 10px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    background: #db1205;
    border: none;
  }
  .btn_ss:hover{
    background: red;
  }
  .jl{
    display: block;
    float:right;
    height: 45px;
    line-height: 45px;
    width: 125px;
    text-align: center;
    margin-top: 10px;
    background: #fcf5e9;
    color: #ff6600;
    margin-right: 20px;
  }
  .qy{
    display: block;
    float:right;
    height: 45px;
    line-height: 45px;
    width: 125px;
    text-align: center;
    margin-top: 10px;
    background: #fcf5e9;
    color: #ff6600;
    margin-right: 10px;
  }
</style>

