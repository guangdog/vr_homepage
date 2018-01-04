<template>
  <div class="fri-box">
    <div class="fri-box-tit">
      VR导航
    </div>
    <div class="fri-box-con">
      <div class="area">
        <div class=" frame move-span cl frame-1">
          <div class="column frame-1-c">
            <div class="move-span temp"></div>
            <div class="fri-box-con-section block move-span">
              <div class="dxb_bc">
                <div style="padding-left: 10px;">
                  <a v-for="item in arr" :href="item.url_link" target="_blank" class="fri-box-a">{{item.name}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {homelinks} from '../../api/homepage'
export default{
  data () {
    return {
      arr: []
    }
  },
  created () {
    homelinks().then(res => {
      this.arr = res.data.data
    })
  }
}
</script>
<style scoped>
  a{
    color: #333;
  }
  .fri-box{
    overflow: hidden;
    width: 1190px;
    background: #fff;
    padding: 2px 0 30px;
  }
  .fri-box-tit{
    height: 16px;
      line-height: 16px;
      border-left: 3px solid #4691f3;
      padding-left: 10px;
      margin-top: 12px;
      font-size: 16px;
      color: #222;
      text-align:left
  }
  .fri-box-con{
    padding: 0;
    font: 12px/1.5 '微软雅黑',Tahoma,Helvetica,'SimSun',sans-serif;
      color: #666;
  }
  .frame{
    border: none;
      background: none;
      margin: 0;
  }
  .block, .temp {
      margin: 0;
  }
  .temp {
      margin: 1px;
  }
  .fri-box-con-section{
    padding: 0 15px 0 20px;
      margin-top: 10px;
      float: left;
  }
  .fri-box-a{
    display: inline-block;
      width: 100px;
      margin: 5px 8px;
      background:url(../../assets/images/homepage/dot.png) left center no-repeat;
      padding-left: 10px;
      float: left;
      text-align:left
  }
  
</style>