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

        </div>
      </div>
      <div>

      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data () {
    return {
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
</style>
