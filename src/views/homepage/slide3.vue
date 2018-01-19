<template>
  <div class="slide3">
    <header>
      <P>
        <a>更多></a>VR学习指引
      </P>
    </header>
    <div class="bottom">
      <div>
        <div>
          <a href="#" :class="{white: isopen,main: !isopen}"  @mouseenter="enter()">认识VR</a>
          <div class="smDiv" @mouseleave="leave()" :class="{open: isopen}">
            <div class="n-ring-con">
              <a href="#" class="n-round-icon n-jyxy">
                <span class="shoimg showimg1"></span>
                <i>htc vive</i>
              </a>
              <a href="#" class="n-round-icon n-rzxy">
                <span class="shoimg showimg2"></span>
                <i>psvr</i>
              </a>
              <a href="#" class="n-round-icon n-ksp">
                <span class="shoimg showimg3"></span>
                <i>定位追踪</i>
              </a>
              <a href="#" class="n-round-icon n-zrfd">
                <span class="shoimg showimg4"></span>
                <i>交互输入</i>
              </a>
              <a href="#" class="n-round-icon n-qtlx">
                <span class="shoimg showimg5"></span>
                <i>oculus</i>
              </a>
              <a href="#" class="n-round-icon n-xmdp">
                <span class="shoimg showimg6"></span>
                <i>运动平台</i>
              </a>
              <a href="#" class="n-round-icon n-zbfd">
                <span class="shoimg showimg7"></span>
                <i>unity</i>
              </a>
              <a href="#" class="n-round-icon n-zzhd">
                <span class="shoimg showimg8"></span>
                <i>unreal engine</i>
              </a>
            </div>
          </div>

          <a href="#" class="icon icon1">
            <span></span>
            <i>认识AR|MR</i>
          </a>
          <a href="#" class="icon icon2">
            <span></span>
            <i>MR开发入门</i>
          </a>
          <a href="#" class="icon icon3">
            <span></span>
            <i>开发指引</i>
          </a>
          <a href="#" class="icon icon4">
            <span></span>
            <i>VR硬件入门</i>
          </a>
          <a href="#" class="icon icon5">
            <span></span>
            <i>VR引擎开发</i>
          </a>
          <a href="#" class="icon icon6">
            <span></span>
            <i>VR头显入门</i>
          </a>
          <a href="#" class="icon icon7">
            <span></span>
            <i>VR外设入门</i>
          </a>
          <a href="#" class="icon icon8">
            <span></span>
            <i>Untiy入门</i>
          </a>
          <a href="#" class="icon icon9">
            <span></span>
            <i>CryEngine</i>
          </a>
          <a href="#" class="icon icon10">
            <span></span>
            <i>Unreal入门</i>
          </a>
          <a href="#" class="icon icon11">
            <span></span>
            <i>配套技术介绍</i>
          </a>
        </div>
      </div>
      <div>
        <ul>
        	<li v-for="(dates,index) in arr">
            <div class="li_a">
              <a href="#" v-if="index==0"><img :src="dates.imgs" /></a>
              <div class="items">
                <p>{{dates.js}}</p>
                <span>{{dates.pl}}人评论</span>
                <span>{{dates.ll}}人浏览</span>
              </div>
            </div>
        	</li>
        </ul>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {js: 'VR外设盘点，让VR整体体验更完整!', pl: '15', ll: '2035', imgs: 'http://www.52vr.com/data/attachment/block/cc/cc8311ee7f8217fb9953df08d20f4e0b.jpg'},
        {js: 'VR外设盘点，让VR整体体验更完整!', pl: '15', ll: '32', imgs: 'http://www.52vr.com/data/attachment/block/cc/cc8311ee7f8217fb9953df08d20f4e0b.jpg'},
        {js: 'VR外设盘点，让VR整体体验更完整!', pl: '15', ll: '22', imgs: 'http://www.52vr.com/data/attachment/block/cc/cc8311ee7f8217fb9953df08d20f4e0b.jpg'},
        {js: 'VR外设盘点，让VR整体体验更完整!', pl: '15', ll: '12', imgs: 'http://www.52vr.com/data/attachment/block/cc/cc8311ee7f8217fb9953df08d20f4e0b.jpg'},
        {js: 'VR外设盘点，让VR整体体验更完整!', pl: '15', ll: '42', imgs: 'http://www.52vr.com/data/attachment/block/cc/cc8311ee7f8217fb9953df08d20f4e0b.jpg'}
      ],
      isopen: false
    }
  },
  methods: {
    enter () {
      this.isopen = true
    },
    leave () {
      this.isopen = false
    }
  }
}
</script>
<style scoped>
.n-ring-con {
  width: 234px;
  height: 234px;
  position: relative;
  top: 60px;
  left: 60px;
}
.n-round-icon span {
  display: inline-block;
  position: absolute;
  background: url(http://www.52vr.com/template/qu_business/img/ico-flowchart.png) 0 0 no-repeat;
}
.n-round-icon i {
  position: absolute;
  font-size: 12px;
  color: #fff;
}
.n-round-icon:nth-child(1) {
  width: 33px;
  height: 30px;
  top: 5px;
  left: 103px;
}
.n-jyxy span {
  width: 32px;
  height: 33px;
  background-position: -76px -339px;
}
.n-jyxy i {
  top: -35px;
  left: -13px;
  width: 55px;
  text-align: center;
}
.n-round-icon:nth-child(2) {
  width: 35px;
  height: 37px;
  top: 36px;
  left: 186px;
}
.n-rzxy span {
  width: 35px;
  height: 37px;
  background-position: -76px -378px;
}
.n-rzxy i {
  top: 6px;
  left: 45px;
  width: 55px;
  text-align: left;
}
.n-round-icon:nth-child(3) {
  width: 26px;
  height: 33px;
  top: 99px;
  left: 195px;
}
.n-ksp span {
  width: 32px;
  height: 33px;
  background-position: -117px -381px;
}
.n-ksp i {
  top: 6px;
  left: 35px;
  width: 55px;
  text-align: left;
}
.n-round-icon:nth-child(4) {
  width: 36px;
  height: 35px;
  top: 160px;
  left: 164px;
}
.n-zrfd span {
  width: 36px;
  height: 35px;
  background-position: -34px -339px;
}
.n-zrfd i {
  top: 10px;
  left: 40px;
  width: 55px;
  text-align: left;
}
.n-round-icon:nth-child(5) {
  width: 36px;
  height: 27px;
  top: 200px;
  left: 102px;
}
.n-qtlx span {
  width: 37px;
  height: 27px;
  background-position: -118px -344px;
}
.n-qtlx i {
  top: 40px;
  left: -11px;
  width: 55px;
  text-align: center;
}
.n-round-icon:nth-child(6) {
  width: 32px;
  height: 35px;
  top: 169px;
  left: 30px;
}
.n-xmdp span {
  width: 30px;
  height: 33px;
  background-position: 1px -339px;
}
.n-xmdp i {
  top: 3px;
  right: 37px;
  width: 55px;
  text-align: right;
}
.n-round-icon:nth-child(7) {
  width: 31px;
  height: 24px;
  top: 103px;
  left: 6px;
}
.n-zbfd span {
  width: 31px;
  height: 30px;
  background-position: 1px -385px;
}
.n-zbfd i {
  top: 3px;
  right: 40px;
  width: 55px;
  text-align: right;
}
.n-round-icon:nth-child(8) {
  width: 28px;
  height: 28px;
  top: 39px;
  left: 34px;
}
.n-zzhd span {
  width: 30px;
  height: 30px;
  background-position: -166px -342px;
}
.n-zzhd i {
  top: -3px;
  right: 38px;
  width: 70px;
  text-align: right;
}

.n-round-icon{
  position: absolute;
}
.slide3{
  width: 1190px;
  height: 520px;
  margin-bottom: 14px;
  background: white;
}
.white{
  background: white !important;
  color:#0078d0 !important;
  position: absolute;
  top: 170px;
  left: 125px;
  width: 110px;
  height: 110px;
  text-align: center;
  border-radius: 50%;
  z-index: 3;
  font-size: 22px;
  padding: 25px;
  box-sizing: border-box;
}
.smDiv{
  width: 354px;
  height: 354px;
  top: 50px;
  left: 0;
  position: absolute;
  background-color: #2874a9;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transform: scale(0.1) rotate(-270deg);
  -moz-transform: scale(0.1) rotate(-270deg);
  -transform: scale(0.1) rotate(-270deg);
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
.open{
  opacity: 1;
  -webkit-transform: scale(1) rotate(0);
  -moz-transform: scale(1) rotate(0);
  -transform: scale(1) rotate(0);
}
.smDiv a i{
  font-style: normal;
  font-size: 12px;
}
header{
  padding-top: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
}
header p{
  border-left: 3px solid #4691f3;
  padding-left: 10px;
  font-size: 16px;
  color: #222;
}
header a{
  float: right;
  margin-right: 15px;
  color: #333;
}
.bottom{
  width: 100%;
  height: 480px;
  display: flex;
  position: relative;
}
.bottom>div:first-child{
  width: 924px;
  height: 480px;
  box-sizing: border-box;
  padding: 30px 79px 50px 20px;
  position: relative;
  background: url('../../../static/images/homepage/flowchart_bg.png') 0 center no-repeat;
}
.bottom>div:last-child{
  width: 234px;
  margin-right: 32px;
  height: 480px;
}
.bottom>div:last-child ul li{
  width: 100%;
}
.li_a{
	padding: 0 0 8px 0;
}
.li_a:hover{
  width: 100%;
  background: #EEEEEE;
}
.items{
	padding-left: 20px;
  margin: 6px 0;
  padding: 11px 0 0 0;
}
.items p{
  background: url(../../../static/images/homepage/dot.png) left center no-repeat;
  padding-left: 8px;
}
.items>span:last-child{
  margin-left: 10px;
}
.main{
  position: absolute;
  top: 170px;
  left: 125px;
  width: 110px;
  height: 110px;
  text-align: center;
  background-color: #0078d0;
  border-radius: 50%;
  z-index: 3;
  font-size: 22px;
  color: #fff;
  padding: 25px;
  box-sizing: border-box;
}
@keyframes sonarEffect {
  0% {transform: scale(0.9);background: #0078d0;opacity: 0}
  50% {transform: scale(1.2);opacity: 0.6}
  100% {transform: scale(0.9);;opacity: 0}
}
.main:after {
  -webkit-animation: sonarEffect infinite 1.3s ease-out 75ms;
  -moz-animation: sonarEffect infinite 1.3s ease-out 75ms;
  animation: sonarEffect infinite 1.3s ease-out 75ms;
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
  border-radius: 50%;
  position: absolute;
  content: '';
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  opacity: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
}
.icon{
  width: 60px;
  height: 60px;
  display: block;
  border-radius: 50%;
  position: absolute;
  -webkit-transition: 0.8s !important;
}
.icon span{
  box-sizing: border-box;
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  border: 1px solid #0078d0;
  border-radius: 50%;
  -webkit-transition: 0.8s !important;
  background: url(http://www.52vr.com/template/qu_business/img/ico-flowchart.png) 0 0 no-repeat; 
}
.icon:hover{
  background: #0078d0;
}
.icon:hover span{
  -webkit-transform: rotate(720deg);
}
.icon i{
  left: -15px;
  width: 80px;
  display: block;
  position: absolute;
  top: 65px;
  font-size: 12px;
  color: #0078d0;
  text-align: center;
}
.icon1{
  top: 352px;
  left: 150px;
}
.icon1:hover span{
  background-position: 0 -60px;
}
.icon2{
  top: 352px;
  left: 305px;
}
.icon2 span{
  background-position: -60px 0;  
}
.icon2:hover span{
  background-position: -60px -60px;
}
.icon3{
  top: 203px;
  left: 356px;
}
.icon3 span{
  background-position: -120px 0;  
}
.icon3:hover span{
  background-position: -120px -60px;
}
.icon4{
  top: 108px;
  right: 345px;
}
.icon4 span{
  background-position: 0 -120px;
}
.icon4:hover span{
  background-position: 0 -180px;
}
.icon5{
  top: 316px;
  right: 345px;
}
.icon5 span{
  background-position: -60px -120px; 
}
.icon5:hover span{
  background-position: -60px -180px;
}
.icon6{
  top: 70px;
  right: 174px;
}
.icon6 i,.icon7 i,.icon8 i,.icon9 i{
  width: 80px;
  top: 55px;
}
.icon:nth-child(n+8){
  width: 50px;
  height: 50px;
}
.icon6 span{
  background-position: -125px -125px;
  width: 50px;
  height: 50px;
}
.icon6:hover span{
  background-position: -125px -185px;
}

.icon7{
  top: 150px;
  right: 174px;
}
.icon7 span{
  background-position: -185px -125px;
  width: 50px;
  height: 50px;
}
.icon7:hover span{
  background-position: -185px -185px;
}
.icon8{
  top: 272px;
  right: 174px;
}
.icon8 span{
  background-position: -245px -125px;
  width: 50px;
  height: 50px;
}
.icon8:hover span{
  background-position: -245px -185px;
}
.icon9{
  top: 272px;
  right: 96px;
}
.icon9 span{
  background-position: -245px -239px;
  width: 50px;
  height: 50px;
}
.icon9:hover span{
  background-position: -245px -299px;
}
.icon10{
  top: 362px;
  right: 174px;
}
.icon10 span{
  background-position: -186px -8px;
  width: 50px;
  height: 50px;
}
.icon10:hover span{
  background-position: -186px -68px
}
.icon11{
  top: 362px;
  right: 96px;
}
.icon11 span{
  background-position: -244px -11px;
  width: 50px;
  height: 50px;
}
.icon11:hover span{
  background-position: -244px -71px;
}


</style>