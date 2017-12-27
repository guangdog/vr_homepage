<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font: 12px/1.5 '微软雅黑',Tahoma,Helvetica,'SimSun',sans-serif;
  color: #666;
}
*{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
body {
  background: #F5F5F5;
}
</style>
