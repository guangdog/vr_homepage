<template>
    <div>
          <div  id="nav1">
            <div  class="nav">
                <ul  class="logins">
                    <li><a  href="">登录</a></li>
                    <li><a  href="">立即注册</a></li>
                    <li><a  href="">QQ登录</a></li>
                    <li><a  href="">微信登录</a></li>
                </ul>
                <ul  class="logins1">
                    <li><a  href="">签到得积分！</a></li>
                    <li><a  href="">做任务赚积分</a></li>
                    <li><a  href="">QQ群：666666</a></li>
                    <li><a  href="">积分兑换</a></li>
                    <li>
											<select>
													<option><a  href="">联系我们</a></option>
													<option><a  href="">版权投放</a></option>
													<option><a  href="">广告投放</a></option>
											</select>
                    </li>
                </ul>
          </div>
        </div>
      <div  id="top">
      
        <div  class="opct"></div>
        <div  class="opct1">
        <div  class="nav_search">
            
                <div  class="nav_search_login">
                        <img  class="logo"  style="z-index:  100"  src="static/images/recruit/logo.png"  alt="">
                </div>
            
                <div  class="nav_search_right">
                    <ul  style="z-index:  10;">
                        <li><a  href="">首页</a></li>
                        <li><a  href="">VR资讯</a></li>
                        <li><a  href="">VR教程</a></li>
                        <li><a  href="">招聘外包</a></li>
                        <li><a  href=""  style="color:  #FFA500;">虚幻引擎</a></li>
                        <li><a  href="">VR公开课</a></li>
                        <li><a  href="">VR社区</a></li>
                    </ul>
                    <div  id="search">
                        <input  type="text"  placeholder="请输入搜索内容"/>
                        <button  type="submit"><img  src="static/images/recruit/img4.png"/></button>
                    </div>
                </div>
            </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style  scoped>
  *{
    margin:  0  auto;
    padding:  0;
    font-size:  14px;
    list-style:  none;
    text-decoration:  none;
  }
  #nav1{
    width:  100%;
    height:  30px;
    background:  #232121;
  }
  .nav{
          width:1190px;
          height:  30px;
          margin:0  auto;
  }
  #top{
    background-image:  url(../../../../static/images/recruit/default.jpg);
    height:  170px;
  }  
  .nav  .logins{
      float:left;
      height:  30px;
      width:280px;
      line-height:30px;
      display:flex;
}
  .nav  .logins  li{
      list-style:none;
  }
  .nav  .logins  li  a  {
          text-decoration:  none;
          color:  #999;
          font-size:  12px;
      }
      .nav  .logins  li  a:hover  {
          color:orange;
      }
  
      .nav  .logins1  {
          float:right;
          list-style:  none;
          height:30px;
          width:440px;
          display:flex;
          line-height:  30px;
      }
      .nav  .logins1  li{
          float:left;
      }
      .nav  .logins1  li  a{
          font-size:12px;
      }
      .nav  .logins1  li  select{
          background:#232121;
          color:#999;
          border:2px  solid  #232121;
          font-size:12px;
      }
  
      .nav  .logins1  li  select:hover  {
          background:  white;
          color:  #999;
          border:  2px  solid  #232121;
          font-size:  12px;
      }
  
      .nav  .logins1  li  a  {
          text-decoration:  none;
          color:#999;
      }
    .nav  .logins1  li:nth-child(-n+2)  a{
          color:  red;
    }
    .nav  .logins1  li:nth-child(3)  a{
          color:  #F1990B;
    }
      .nav  .logins1  li  a:hover  {
          color:  #ffcc00;
      }
      .nav_search{
          width:1170px;
          height:  90px;
          margin:0  auto;
          margin-top:10px;
          overflow:  hidden;
      }
        .nav_search  .nav_search_login{
            float:left;
            width:188px;
            height:90px;
            font-size:13px;
            list-style:none;
        }
      .nav_search  .nav_search_login  a{
            color:#999;
            text-decoration:none;
      }
      .nav_search_right{
          width:  968px;
          float:  right;
        position:  absolute;
        top:  0;
        right:  7%;
      }
      .nav_search_right  ul{
        display:  flex;
        width:  600px;
        line-height:  30px;
        float:  left;
            margin-left:  110px;
      }
      .nav_search_right  ul  li  a{
        color:  white;
      }
      #search{
        width:  160px;
        background:  #000000;
        color:  #B6B6B6;
        height:  30px;
        border-radius:  20px;
        float:  right;
        padding:0px  10px;
      }
      #search  input[type="text"]{
        width:  100px;
        border:  none;
        margin-top:  8px;
        background:  none;
        font-size:  12px;
      }
      #search  button[type="submit"]{
        width:  20px;
        height:  20px;
        float:  right;
        margin-top:  7px;
        background:  none;
        border:  none;
      }
      .nav2{
        width:1190px;
          margin:  0  auto;
        height:38px;
        margin-top:  32px;
      }
      .nav3{
        width:972px;
        margin-left:  218px;
        height:  38px;
      }
      .nav3  ul{
        display:  flex;
        width:  580px;
        line-height:  38px;
        float:  left;
      }
      .nav3  ul  li  a{
        font-size:  18px;
        color:  white;
      }
        .opct{
              width:100%;
              height:44px;
              background:  #000;
              opacity:  0.5;      
              position:  relative;        
        }
        .logo{
            z-index:  10;
        }
        .opct1{
            width:  1340px;
            height:  44px;
            position:  absolute;
            top:  38px
        }
  </style>