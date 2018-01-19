<template>
  <div id="login">
    <h1>游戏VR注册</h1>
    <div>
      <P><span>用户：</span><input v-model="user" /></P>
      <P><span>密码：</span><input v-model="pwd" type="password" /></P>
      <P><span>确认密码：</span><input v-model="pwd" type="password" /></P>
      <p><button @click="toRegister">注册</button></p>
      <p>已有账号？<router-link to="/login">立即登录</router-link></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    toRegister () {
    }
  }
}
</script>
<style scoped>
  #login{
    width: 100%;
    height: 100vh;
    background: url(http://imgsrc.baidu.com/forum/w%3D580/sign=3834b2dfe0f81a4c2632ecc1e72b6029/b60f7bec54e736d11b298ca390504fc2d5626967.jpg);
    background-size: 100% 100%;
  }
  #login h1{
    text-align: center;
    padding-top: 50px;
    font-size: 38px;
    color: white;
  }
  #login>div{
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: white;
  }
  a{
    color: hsl(36, 97%, 71%);
  }
  #login>div>p{
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 5%;
    display: flex;
    line-height: 40px;
    height: 40px;
    justify-content: space-between;
  }
  #login>div>p>span{
    display: block;
    width: 16%;
    padding-right: 4%;
    text-align: right;
  }
  #login>div>p>input{
    display: block;
    width: 80%;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  #login>div>p>button{
    width: 100%;
    height: 100%;
    line-height: 100%;
  }
</style>
