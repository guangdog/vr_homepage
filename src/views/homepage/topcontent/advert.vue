<template>
  <div class="advert">
    <img v-for="(item,index) in arr" :key="index" :src="item.img">
  </div>
</template>
<script>

export default {
  data () {
    return {
      arr: [
        {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644077758,3194768429&fm=200&gp=0.jpg'},
        {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644077758,3194768429&fm=200&gp=0.jpg'},
        {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644077758,3194768429&fm=200&gp=0.jpg'},
        {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1644077758,3194768429&fm=200&gp=0.jpg'}
      ]
    }
  }
}
</script>
<style scoped>
.advert{
  word-wrap: break-word;
  width: 296px;
  height: 360px;
}
.advert img{
  float: left;
  width: 100%;
  height: 90px;
}
</style>