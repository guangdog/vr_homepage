<template>
  <div id="m_left">
    <a class="circle-avatar">
      <img src="static/images/recruit/img3.gif"/>
    </a>
    <h1>VR外包</h1>
    <ul>
      <li>
        <span>0</span>
        <p>今日</p>
      </li>
      <li id="split" style="width: 1px;"></li>
      <li>
        <span>94</span>
        <p>主题</p>
      </li>
    </ul>
    <div style="clear: both;"></div>
    <div id="p">
      <p id="p1">所有2016年10月以后的外包信息,都经过52VR.COM核实。</p>
      <p>如有失效信息，请联系</p>
      <p>QQ：<span style="color: red; font-weight: bold; font-size: 12px;">281620021</span></p>
    </div>
    <div>
      <button class="left_button left_button--tamaya left_btfour" data-text="发布外包"><span>发布外包</span></button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped">
  *{
    margin: 0 auto;
    padding: 0;
    font-size: 14px;
    list-style: none;
    text-decoration: none;
  }
  #m_left{
    width: 100%;
    box-sizing: border-box;
    background: none;
  }
  .circle-avatar {
      display: block;
      text-align: center;
      margin-top: -80px;
  }
  h1{
    margin-top: 20px;
    text-align: center;
  }
  .circle-avatar img {
      display: block;
      width: 120px;
      height: 120px;
      margin: 0px auto;
      border-radius: 50%;
      border: 4px solid #FFF;
      box-shadow: 0px -1px 6px #DDD;
      background-color: #fff;
  }
  #m_left ul{
    padding: 0px 20px;
    margin-top: 40px;
  }
  #m_left ul li{
    float: left;
    width: 64px;
    text-align: center;
  }
  #m_left ul li p{
    color: #999999;
    font-size: 12px;
    margin-top: 4px;
  }
  #split{
      border-left: 1px solid #EEE;
      height: 28px;
      line-height: 28px;
      margin: 7px 6px 0px 8px;
  }
  #p{
    width: 100%;
    color: #999;
    box-sizing: border-box;
    padding: 10px 20px;
    margin-top: 30px;
  }
  #p p{
      line-height: 20px;
      font-size: 10px;
  }
  #p1{
    color: red;
    font-weight:bold;
  }
  .left_button--tamaya {
      overflow: hidden;
      color: #7986cb;
  }
  .left_button {
      min-width: 160px;
      max-width: 170px;
      display: block;
      margin: 1em;
      padding: 1em 3em;
      border: 0px solid #ccc;
      background: #000;
      vertical-align: middle;
      position: relative;
      z-index: 1;
      border-radius: 5px;
  }
  .left_button--tamaya::before {
      top: 0;
      padding-top: 1em;
  }
  .left_btfour::before, .left_btfour::after {
      background: #db1205;
  }
  .left_button--tamaya::before, .left_button--tamaya::after {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0;
      background: #f66705;
      color: #fff;
      overflow: hidden;
      -webkit-transition: -webkit-transform 0.3s;
      transition: transform 0.3s;
      -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }
  .left_button--tamaya > span{
    display: block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1)
  }
  .left_button--tamaya::after {
      bottom: 0;
      line-height: 0;
  }
  .left_btfour::before, .left_btfour::after {
      background: #db1205;
  }
  .left_button--tamaya::before, .left_button--tamaya::after {
      content: attr(data-text);
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0;
      color: #fff;
      overflow: hidden;
      transition: transform 0.3s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }
</style>