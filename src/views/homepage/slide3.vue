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
          <div class="main">认识VR</div>
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
      ]
    }
  }
}
</script>
<style scoped>
.slide3{
  width: 1190px;
  height: 520px;
  margin-bottom: 14px;
  background: white;
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
}
.bottom>div:first-child{
  width: 924px;
  height: 480px;
  box-sizing: border-box;
  padding: 30px 79px 50px 20px;
  position: relative;
  background: url('../../assets/images/homepage/flowchart_bg.png') 0 center no-repeat;
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
  background: url(../../assets/images/homepage/dot.png) left center no-repeat;
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
</style>
