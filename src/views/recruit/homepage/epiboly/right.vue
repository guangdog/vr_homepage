<template>
  <div id="m_right">
    <righttop></righttop>
    <date></date>
    <content1></content1>
  </div>
</template>

<script>
import righttop from './rightTop.vue'
import date from './date.vue'
import content1 from './content.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    righttop,
    date,
    content1
  }
}
</script>

<style scoped="scoped">
  *{
    margin: 0 auto;
    padding: 0;
    font-size: 14px;
    list-style: none;
    text-decoration: none;
  }
  #m_right{
    width: 100%;
    box-sizing: border-box;
  }
</style>