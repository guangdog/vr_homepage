<template>
  <div class="rank_box">
      <slot name="top"></slot>
      <div class="rank_box_list">
          <ul class="rank_box_ul">
              <li class="current" style=" display: list-item;" v-for="(dates,index) in arr"  @mouseenter="showItem(index)">
                  <div class="rank-show-title">
                      <a href="http://www.52vr.com/thread-36723-1-1.html">
                          <div class="rank_box_tit">
                            <div class="ones" :style="{background: color}">{{index+1}}</div>
                              <span>{{dates.tname}}</span>
                              <div class="two" :style="{color: color}">{{dates.aaa}}</div>
                          </div>
                      </a>
                  </div>
                    <div class="rank-show-block" :class="{isShow: isShow[index]}">
                        <a href="http://www.52vr.com/thread-36723-1-1.html">
                            <img :src="dates.timg" />
                        </a>
                    </div>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
export default{
  props: ['arr', 'color'],
  data () {
    return {
      isShow: []
    }
  },
  methods: {
    showItem (index) {
      for (let item in this.arr) {
        this.isShow[item] = false
      }
      this.isShow[index] = true
      this.$forceUpdate()
    }
  },
  created () {
    for (var i = 0; i < this.arr.length; i++) {
      this.isShow.push(false)
    }
    this.isShow[0] = true
  }
}
</script>
<style scoped>

.rank_box{
  width: 288px;
  display: inline-block;
}
.rank_box  h4{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: relative;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
}
.rank_box h4 i{
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    line-height: 60px;
    font-size: 30px;
    text-align: center;
    position: absolute;
    left: 15px;
    bottom: 20px;
    background: #FFFFFF;
    z-index: 99;
}
.rank_boxh41{
    background: #75d09f;
}
.rank_boxh42{
    background:#ffb85c;
}
.rank_boxh43{
    background:#ff9066;
}
.rank_boxh44{
    background:#d6ade7;
}
.h4 i img{
    width: 50px;
    margin-top: 5px;
}
.rank_box h4 a{
    color: #FFFFFF;
}
.rank_box .rank_box_list{
    width: 100%;
    border-top: 0;
    overflow: hidden;
}
.rank_box_ul{
    position: relative;
    background: white;
    height: 652px;
}
.rank-show-title{
    font-size: 14px;
}
.rank-show-title a{
    display: block;
    height: 47px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.rank_box_tit{
    padding: 15px 0;
    overflow: hidden;
    line-height: 16px;
    height: 16px;
    border-top: 1px dashed #EDEDED;
}
.rank_box_tit span{
    display: block;
    height: 16px;
    line-height: 16px;
    margin-left: 20px;
    width: 65%;
    overflow: hidden;
    float: left;
    text-align: center;
}
.rank_box_tit .ones{
    color: #fff;
    display: block;
    height: 16px;
    width: 16px;
    border-radius: 3px;
    float: left;
    text-align: center;
}
.rank_box_tit .two{
    width: 20%;
    text-align: center;
    float: right;
    height: 16px;
    overflow: hidden;
    font-weight: normal;
}
.rank_box_ul li{
    line-height: 47px;
    overflow: hidden;
    position: relative;
    zoom: 1;
    list-style: none;
}
.rank_box_ul li img{
    width: 260px;
    height: 152px;
}
.rank_box_ul li:last-child .rank-show-block{
    border: none;
}
.rank_box_ul li .isShow{
  height: 160px;
}
.rank-show-block{
    height: 0px;    
    transition: height .3s;
}
.rank-show-block a img{
    width: 100%;
}
.current{
  background: #FFFFFF;
  padding: 0 10px;
}
</style>