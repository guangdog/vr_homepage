<template>
  <div>
    <!-- 资讯 bbsinfos -->
    <div class="main">
      <div class="left">
        <div class="tab">
          <p style="height: 35px;line-height: 35px;">  
            <a :class="{choose:ischoose1[0]}" @mouseenter="infosTypeChoose(0)"><img src="../../assets/images/homepage/tab1.png"/>最新</a>
            <a :class="{choose:ischoose1[1]}" @mouseenter="infosTypeChoose(1)"><img src="../../assets/images/homepage/tab2.png"/>AR增强实现</a>
            <a :class="{choose:ischoose1[2]}" @mouseenter="infosTypeChoose(2)"><img src="../../assets/images/homepage/tab3.png"/>VR硬件</a>
            <a :class="{choose:ischoose1[3]}" @mouseenter="infosTypeChoose(3)"><img src="../../assets/images/homepage/tab4.png"/>虚幻UE4</a>
          </p>
          <div class="slide1" v-for="data in infosType">  
            <div class="slide-left" style="position: relative;">
              <a style="font-size: 18px;font-family: '微软雅黑';padding: 10px 10px 0px 10px;" class="Onerow">{{data.title}}</a>
              <p style="font-size: 15px;color: #888;margin-top: 10px;padding: 10px 10px 0px 10px;" class="Thrrow">{{data.content}}</p>
              <div style="width: 90%; color: #888; background: ;position: absolute;bottom: 0px;padding: 10px 10px 10px 10px;">
                <a class="qtag">AR|MR</a> 
                    <span style="margin-left: 20px;"> 发布时间：{{data.created_time}}</span>
              <em style="margin-left: 20px;">{{data.pv}}人浏览</em>
              </div>
            </div>
            <div class="slide-right">
              <p><img :src="data.thumbnail"/></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="right">
        <div class="qhead_tit">
          <a>最新资讯</a>
        </div>
          <ul class="weekly-list" >
            <li style="line-height: 40px; " v-for="(data,index) in newInfos" @mouseenter="showItem(index)">
              <div class="app-show-title" >
                <p class="head">{{data.title}}</p> 
                <div  class="noneshow" :class="{isShow: isShow[index]}">
                  <p  style="color: #666;line-height: 20px;height: 20px;">浏览：{{data.pv}}<span style="float: right;margin-right: 12px;">{{data.update_time}}</span></p>
                  <p><img :src="data.thumbnail" style="width:220px;height: 120px;margin-top: 5px;" /></p>
                </div>
              </div>    
            </li>
          </ul>
        <div class="qhead_tit">
            <a>最新讨论</a>
          </div>
          <ul class="weekly-list2" >
            <li style="height: 40px;line-height: 40px;" v-for="(data,index) in bbsList" >
              <div class="app-show-title">
                <a>{{data.title}}</a>  
              </div>    
            </li>
            </ul>
      </div>

   </div>

    <div class="bottom">
        <div><img src="../../assets/images/homepage/tab5.png"/></div>
        <div><img src="../../assets/images/homepage/tab6.png"/></div>
        <div><img src="../../assets/images/homepage/tab7.png"/></div>
        <div><img src="../../assets/images/homepage/tab8.png"/></div>
        <div><img src="../../assets/images/homepage/tab9.png"/></div>
    </div>
    <!-- 社区信息 CommunityInfo -->
    <div class="enlarge">
      <p style="height: 10px;line-height: 10px; ">  
        <a :class="{choose:ischoose2[0]}" @mouseenter="CommunityInfo(0)">VR外包</a> 
        <a :class="{choose:ischoose2[1]}" @mouseenter="CommunityInfo(1)">VR案例</a>
        <a :class="{choose:ischoose2[2]}" @mouseenter="CommunityInfo(2)">VR硬件</a>
        <a :class="{choose:ischoose2[3]}" @mouseenter="CommunityInfo(3)">VR源码</a>
      </p>
      <div v-for="item in communityArr"><img :src="item.thumbnail"/><span><a>{{item.title}}</a></span></div>
    </div>
  </div>
  
</template>
<script>
import {infosGetByCateId, infosGetByLimit, bbsinfosGetByLimit, bbsinfosListByPage} from '../../api/homepage'
export default {
  data () {
    return {
      isShow: [],
      infosType: [],
      newInfos: [],
      bbsList: [],
      infosTypeQuery: {
        cateId: 1,
        limit: 7
      },
      communityArr: [],
      ischoose1: [false, false, false, false],
      ischoose2: [false, false, false, false]
    }
  },
  methods: {
    showItem (index) {
      for (let item in this.newInfos) {
        this.isShow[item] = false
      }
      this.isShow[index] = true
      this.$forceUpdate()
    },
    // 根据分类id获取资讯
    infosTypeChoose (i) {
      this.ischoose1 = [false, false, false, false]
      this.ischoose1[i] = true
      this.infosTypeQuery.cateId = i + 1
      infosGetByCateId(this.infosTypeQuery).then(res => {
        this.infosType = res.data.data
      })
    },
    // 查询根据id社区信息
    CommunityInfo (i) {
      this.ischoose2 = [false, false, false, false]
      this.ischoose2[i] = true
      var id = i === 0 ? 16 : i === 1 ? 33 : i === 2 ? 15 : 11
      var listQuery = {
        page: 1,
        limit: 8,
        category_id: id
      }
      bbsinfosListByPage(listQuery).then(res => {
        this.communityArr = res.data.data
      })
    },
    // 查询最新资讯、最新讨论数据
    queryInfosType () {
      // 最新资讯
      infosGetByLimit({limit: 12}).then(res => {
        this.newInfos = res.data.data
        for (let index in this.newInfos) {
          this.newInfos[index].update_time = this.newInfos[index].update_time.substr(0, 10)
        }
      })
      // 最新讨论
      bbsinfosGetByLimit({limit: 10}).then(res => {
        this.bbsList = res.data.data
      })
    }
  },
  created () {
    for (var i = 0; i < this.newInfos.length; i++) {
      this.isShow.push(false)
    }
    this.isShow[0] = true
    this.infosTypeChoose(0)
    this.queryInfosType()
    this.CommunityInfo(0)
  }
}
</script>
<style scoped>
.head, .noneshow{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.head{
  height: 37px;
  line-height: 37px;
}
.head:hover{
  color: #0078d0;
}
.main{
  width: 1190px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background: white;
  padding-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #EEE;
}
.main .tab{
  padding-left: 10px;
  box-sizing: border-box; 
  width: 825px;
  margin-top: 5px;
}
.Thrrow{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.Onerow{
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.Onerow:hover{
  color: #0078d0;
}
.main .tab p{
  margin-top: 20px;
}
.noneshow{
  height: 0px;
  transition: height .3s;  
}
.isShow{
  height: 160px;
}
.main .tab p a{
  width: 90px;
  height: 35px;
  padding: 20px;
}
.main .tab p a img{
  vertical-align: middle;
}
.main .tab p .choose{
  border-bottom: 2px solid #4691F3;
  color: #4691F3;
}
.main .left{
  width: 825px;
  background: white;
}
.main .right{
  width: 350px;
  background: white;
}
.slide1{
  width: 788px;
  height: 166px;
  padding: 10px;
  margin-top: 10px;
}
.slide1:hover{
  box-shadow: 2px 5px 10px  darkgrey;;
}
.slide-left{
  width: 70%;
  height: 166px;
  float: left;
  background: white;
}
.slide-right{
  width: 30%;
  height: 166px;
  line-height: 166px;
  float: right;
  background: white;
}
.slide-right p{
  height: 166px;
  line-height: 166px;
}
.slide-right img{
  width: 219px;
  height: 150px;
}
.qtag {
  color: #B6B6B6;
  border: 1px solid #E3E3E3;
  float: left;
  width: 74px;
  height: 22px;
  padding: 0 3px;
  text-align: center;
  line-height: 22px;
  border-radius: 11px;
}
.qtag:hover{
  background: red;
  color: white;
  border: 1px solid red;
}
.qhead_tit {
  margin-top: 20px;
  padding-left: 10px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  border-left: 3px solid #4691f3;
  color: #222;
}
.right ul{
  box-sizing: border-box;
  padding: 0px 28px;
}
.right ul li{
  padding-left: 5%; 
  width: 94%;
}
.weekly-list .app-show-title{
  width: 84%;
  padding: 0px 10px 0px 30px;
  background-position: 18px 18px;
  background-image:url(../../assets/images/homepage/dot.png);
  background-repeat:no-repeat;
}
.weekly-list .app-show-title:hover{
  background: #f4f4f4;
  padding: 0px 10px 0px 30px;
  background-position: 18px 18px;
  background-image:url(../../assets/images/homepage/dot.png);
  background-repeat:no-repeat;
}
.weekly-list2 li{
  background: white;
}
.weekly-list2 li>div{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  background-position: 0px 18px;
  background-image:url(../../assets/images/homepage/dot.png);
  background-repeat:no-repeat;
}
.weekly-list2 li:hover{
  height: 40px;
  background: #F5F5F5;
}
.weekly-list2 li:hover a{
  color: #0078d0;
}
li>div{
  display: inline-block;
  color: black;
} 
.bottom{
  width: 1189px;
  height: 100px;
  background: white;
  margin: 0 auto;
  display: flex;
  line-height: 100px;
}
.bottom div{
  width: 100%;
  height: 100px;
}
.bottom div img{
  width: 90%;
  height: 60%;
  margin-left: 5%;
  margin-top: 10%;
}
.enlarge{
  width: 1188px;
  height: 488px;
  background: white;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;  
  flex-wrap: wrap;  
  overflow: hidden;
}
.enlarge p{
  width: 100%;
  padding: 20px;
}
.enlarge p a{
  width: 90px;
  height: 20px;
  padding: 10px 20px;
  font-size: 14px;
}
.enlarge p .choose{
  border-bottom: 2px solid #4691F3;
  color: #4691F3;
}
.enlarge div{
  overflow: hidden;
  width: 260px;
  height:170px;
  margin: 0px 5px 10px 25px;
  position: relative;
}
.enlarge div img{
  width: 100%;
  height: 180px;
  cursor: pointer;  
  transition: all 0.6s;  
}
.enlarge div:hover img{  
  transform: scale(1.2);  
}
.enlarge div:hover a{  
  background-color:rgba(0,50,150,0.6);
}
.enlarge span a{
  width: 90%;
    text-align: center;
    padding: 0 5%;
    height: 32px;
    line-height: 32px;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    font-size: 14px;
    color: #fff;
    background-color:rgba(0,0,0,0.6);
     overflow: hidden;
}
</style>