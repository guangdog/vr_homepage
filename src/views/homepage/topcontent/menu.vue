<template>
  <div class="menu">
    <div >
      <ul>
        <li>
          <p class="are-con-left-p1"><a>VR硬件</a></p>
          <p class="are-con-left-p2">
          <a href="hardware/solution/">方案分析</a>
          <a href="hardware/vive/">HTC Vive</a>
          <a href="hardware/Oculus/">Oculus</a>
        </p>
        </li>
        <li>
          <p class="are-con-left-p1"><a>VR开发</a></p>
          <p class="are-con-left-p2">
          <a>Unity</a>
          <a>UE4</a>
          <a>CryengineV</a>
        </p>
        </li>
        <li>
          <p class="are-con-left-p1"><a>AR|MR</a></p>
          <p class="are-con-left-p2">
          <a>ARKit</a>
          <a>ARCore</a>
          <a>Hololens</a>							
        </p>
        </li>
        <li>
          <p class="are-con-left-p1"><a>VR仿真</a></p>
          <p class="are-con-left-p2 are-con-left-p2-bornone">
          <a>OpenFlight</a>
          <a>OSG</a>
          <a>互动设计软件</a>
        </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arr: []
    }
  }
}
</script>
<style scoped>
.menu{
  width: 250px;
  height: 330px;
  padding: 15px 0;
  background: rgba(0,0,0,0.78)!important;
}
.menu ul li {
  cursor: pointer;
  padding: 17px 20px 0;
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