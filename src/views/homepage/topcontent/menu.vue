<template>
  <div class="menu" @mouseleave="leave()">
    <div class="left">
      <ul>
        <li @mouseenter="enter(0)">
          <p class="are-con-left-p1"><a>VR硬件</a></p>
          <p class="are-con-left-p2">
            <a href="hardware/solution/">方案分析</a>
            <a href="hardware/vive/">HTC Vive</a>
            <a href="hardware/Oculus/">Oculus</a>
          </p>
        </li>
        <li @mouseenter="enter(1)">
          <p class="are-con-left-p1"><a>VR开发</a></p>
          <p class="are-con-left-p2">
          <a>Unity</a>
          <a>UE4</a>
          <a>CryengineV</a>
        </p>
        </li>
        <li @mouseenter="enter(2)">
          <p class="are-con-left-p1"><a>AR|MR</a></p>
          <p class="are-con-left-p2">
          <a>ARKit</a>
          <a>ARCore</a>
          <a>Hololens</a>							
        </p>
        </li>
        <li @mouseenter="enter(3)">
          <p class="are-con-left-p1"><a>VR仿真</a></p>
          <p class="are-con-left-p2 are-con-left-p2-bornone">
          <a>OpenFlight</a>
          <a>OSG</a>
          <a>互动设计软件</a>
        </p>
        </li>
      </ul>
    </div>
    <div class="right" :class="{showdetails: isShow}" >
      <menudetails :menuimg="menuimg"></menudetails>
    </div>
  </div>
</template>
<script>
import menudetails from './menudetails.vue'
export default {
  components: {
    menudetails
  },
  data () {
    return {
      arr: [
        {url: 'http://www.52vr.com/template/qu_business/img/css/web1.png'},
        {url: 'http://www.52vr.com/template/qu_business/img/css/web2.png'},
        {url: 'http://www.52vr.com/template/qu_business/img/css/web3.png'},
        {url: 'http://www.52vr.com/template/qu_business/img/css/web4.png'}
      ],
      menuimg: '',
      isShow: false
    }
  },
  methods: {
    enter (i) {
      // this.isShow = 'none'
      this.menuimg = this.arr[i].url
      this.isShow = true
    },
    leave () {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
.menu{
  width: 890px;
  height: 360px;
  box-sizing: border-box;
  padding: 15px 0;
  background: rgba(0,0,0,0.78)!important;
  position: relative;
}
.left{
  width: 250px;
}
.menu ul li {
  cursor: pointer;
  padding: 17px 20px 0;
}
.right{
  display: none;
  width: 641px;
  height: 360px;
  background: white;
  position: absolute;
  border: 1px solid #4691f3;
  box-sizing: border-box;
  left: 250px;
  top: 0;
  z-index: 10;
}
.showdetails{
  display: block !important;
}
.menu ul li a{
  color: rgb(255, 255, 255);
}
.are-con-left-p1 {
  font-size: 14px;
  margin-bottom: 5px;
}
.are-con-left-p2 {
  font-size: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  padding-bottom: 20px;
}
li:last-child .are-con-left-p2{
  border-bottom: none;
}
.are-con-left-p2 a {
  margin-right: 15px;
}
</style>