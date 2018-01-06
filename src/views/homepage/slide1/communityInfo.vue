<template>
  <div class="box">
    <div v-for="item in arr"><img :src="item.thumbnail"/><span><a>{{item.title}}</a></span></div>
  </div>
</template>
<script>
import {bbsinfosListByPage} from '../../../api/homepage'
export default {
  props: ['id'],
  data () {
    return {
      arr: []
    }
  },
  created () {
    bbsinfosListByPage({
      page: 1,
      limit: 8,
      category_id: this.id
    }).then(res => {
      this.arr = res.data.data
    })
  }
}
</script>
<style scoped>
.box{
  width: 1188px;
  background: white;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;  
  flex-wrap: wrap;  
  overflow: hidden;
}
.box div{
  overflow: hidden;
  width: 272px;
  height:180px;
  margin: 0px 0px 20px 20px;
  position: relative;
}
.box div img{
  width: 100%;
  height: 180px;
  cursor: pointer;  
  transition: all 0.6s;  
}
.box div:hover img{  
  transform: scale(1.2);  
}
.box div:hover a{  
  background-color:rgba(0,50,150,0.6);
}
.box span a{
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
