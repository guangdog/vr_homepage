<template>
  <div id="lsit">
    <div>
        <div id="shang">
            <h4 id="hangye">{{name}}</h4>
        </div>

        <div id="tu">
          <ul class="ul">
            <li v-for="data in arr">
              <img :src="data.thumbnail" alt="">
              <p @click="pup(data.id)" class="bt">{{data.name}}<span style="color:orange;font-size:12px;padding-left:8px;">(26)</span></p>
              <span>主题：1399</span>
              <span style="padding-left:16px;">贴数：2099</span>
            </li>
          </ul>
        </div>

    </div>
  </div>
</template>

<script>
import {getModelByPid} from '@/api/community/list'
export default {
  props: ['name', 'id'],
  data () {
    return {
      arr: [],
      title: 'sss'
    }
  },
  created () {
    getModelByPid({pid: this.id})
    .then(res => {
      this.arr = res.data.data
    })
  },
  methods: {
    pup (id) {
      this.$router.push({path: '/pageshow/community/list/' + id})
    }
  }
}
</script>

<style scoped>
#hangye {
  border-left: 5px #4691f3 solid;
  margin-top: 12px;
  padding: 8px 12px;
  height: 20px;
  border-top: 1px #ccc solid;
}
.bt{
  font-size: 16px;
  color: #333;
  font-weight: 400;
  text-decoration: none;
}
.bt:hover{
  color: #0d58b4;
}
#tu{
  color: #666;
  width: 100%;
  font-size: 12px;
}
.ul{
  display: flex;
  flex-wrap: wrap;
}
.ul li{
  margin-top: 12px;
  list-style: none;
  width: 33.3%;
}
.ul li img{
  width: 80px;
  height: 80px;
  float: left;
  padding: 0 18px;
}
.ul li p{
  font-size: 16px;
  font-weight: 400px;
  margin-top: 8px;
  line-height: 30px;
}
</style>
