<template>
  <div style="border-bottom: 1px solid #EDEDED; padding-bottom:8px;">
    <div id="m_right_top">
      <div>
        <p>共有 <span>{{num}}</span> 篇帖子</p>
      </div>
      <div>
        <button>我要发帖</button>
      </div>
    </div>
    <div style="clear: both;"></div>
    <div id="table">
      <table>
        <tbody>
          <tr>
            <td width="10%">是否到场开发：</td>
            <td>
              <ul>
                <li><a href="">不限</a></li>
                <li><a href="">是</a></li>
                <li><a href="">否</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td width="10%">预算范围：</td>
            <td>
              <ul>
                <li><a href="">不限</a></li>
                <li v-for="data in list" @click="range(data.id)" >{{data.range}}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td width="10%">是否到场开发：</td>
            <td>
              <ul>
                <li><a href="">不限</a></li>
                <li v-for="data in arr" @click="province(data.id)">{{data.province}}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td width="10%">发布截至日期：</td>
            <td>
              <ul>
                <li><a href="">不限</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {getprovinces, getpricerange} from '@/api/recruit/homepage.js'
import {bus} from '@/bus/bus.js'
export default {
  data () {
    return {
      num: 94,
      arr: [],
      list: []
    }
  },
  created () {
    this.getprovinces()
    this.getpricerange()
  },
  methods: {
    getprovinces () {
      getprovinces().then((res) => {
        this.arr = res.data.data
      })
    },
    getpricerange () {
      getpricerange().then((res) => {
        for (let i in res.data.data) {
          if (String(res.data.data[i].min_range).substr(1) === '000') {
            res.data.data[i].min_range = res.data.data[i].min_range / 1000 + 'K'
          }
          if (String(res.data.data[i].max_range).substr(1) === '000') {
            res.data.data[i].max_range = res.data.data[i].max_range / 1000 + 'K'
          }
          if (String(res.data.data[i].min_range).includes('0000')) {
            res.data.data[i].min_range = res.data.data[i].min_range / 10000 + 'W'
          }
          if (String(res.data.data[i].max_range).includes('0000')) {
            res.data.data[i].max_range = res.data.data[i].max_range / 10000 + 'W'
            console.log(String(res.data.data[i].max_range))
          }
          if (res.data.data[i].min_range === -1 && res.data.data[i].max_range === -1) {
            res.data.data[i].range = '面谈'
          } else if (res.data.data[i].max_range === -1) {
            res.data.data[i].range = res.data.data[i].min_range + '以上'
          } else if (res.data.data[i].min_range === 0) {
            res.data.data[i].range = res.data.data[i].max_range + '以下'
          } else {
            res.data.data[i].range = res.data.data[i].min_range + '到' + res.data.data[i].max_range
          }
        }
        this.list = res.data.data
      })
    },
    range (range) {
      bus.$emit('send', {
        range: range
      })
    },
    province (province) {
      bus.$emit('test', {
        province: province
      })
    }
  }
}
</script>

<style scoped="scoped">
  *{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  #m_right_top{
    width: 100%;
    height: 52px;
    
    padding: 0px 10px;
    color: #949494;
  }
  #m_right_top div:first-child{
    line-height: 52px;
    float: left;
  }
  #m_right_top div:first-child span{
    font-size: 18px;
    color: #2B2B2B;
  }
  #m_right_top div:last-child{
    float: right;
  }
  #m_right_top div:last-child button{
    width: 91px;
    height: 42px;
    border: none;
    color: white;
    background: #0D58B4;
    margin-top: 10px;
  }
  #table{
    width: 100%;
    font-size: 12px;
    color: #666666;
  }
  #table td{
      padding: 5px 0 5px 10px;
      border: none;
      vertical-align: top;
  }
  #table a{
    color: #666666;
  }
  #table ul li {
      float: left;
      margin-right: 4px;
      padding: 0 4px;
  }
  #table ul li a:hover{
    color: #0d58b4;
  }
</style>
