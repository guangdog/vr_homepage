<template>
<div class="app">
  	<top2 class="top2"></top2>
    <main2 class="main2"></main2>
    <footer1 class="footer"></footer1>
</div>
</template>

<script>
import {listByPage} from '@/api/community/list'
import top2 from '../zym_components/list_top.vue'
import main2 from '../zym_components/list_main.vue'
import footer1 from '../main_components/footer.vue'
export default {
  data () {
    return {
      arr: [],
      id: ''
    }
  },
  components: {
    top2,
    main2,
    footer1
  },
  created () {
    this.id = this.$route.params.id
    listByPage({category_id: this.id}).then(res => {
      this.arr = res.data.data
    })
  }
}
</script>

<style scoped="scoped">
.app{
  background: ghostwhite;
}
.top2{
  width: 100%;
  height: 198px;
}
.main2{
  padding-top: 30px;
  width: 1190px;
  margin: 0 auto;
}
.footer {
	clear: both;
	width: 100%;
	height: 103px;
}
</style>
