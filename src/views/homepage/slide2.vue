<template>
    <div class="slide2">
        <item :arr="arr" :color="'#75d09f'">
            <h4 class="rank_boxh41" slot="top">
                <i><img src="../../assets/images/homepage/rank1.png" /></i>
                <a href="http://www.52vr.com/forum/unreal">虚幻UE4</a>
            </h4>
        </item>
        <item :arr="arr" :color="'#ffb85c'">
             <h4 class="rank_boxh42" slot="top">
                <i><img src="../../assets/images/homepage/rank2.png" /></i>
                <a href="http://www.52vr.com/forum/hololens">AR-Hololens</a>
            </h4>
        </item>
        <item :arr="arr" :color="'#ff9066'">
            <h4 class="rank_boxh43" slot="top">
                <i><img src="../../assets/images/homepage/rank3.png" /></i>
                <a href="http://www.52vr.com/forum/unity">Unity</a>
            </h4>
        </item>
        <item :arr="arr" :color="'#d6ade7'">
            <h4 class="rank_boxh44" slot="top">
                <i><img src="../../assets/images/homepage/rank4.png" /></i>
                <a href="http://www.52vr.com/forum/models">模型库</a>
            </h4>
        </item>
    </div>
</template>
<script>
import item from './slide2/item.vue'
export default{
  components: {
    item
  },
  data () {
    return {
      arr: [
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '321'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '12'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '11'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '32'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '22'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '44'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '66'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '66'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '66'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', aaa: '66'}
      ]
    }
  }
}
</script>
<style scoped>
.slide2{
    display: flex;
    width: 1190px;
    margin: 30px auto 15px;
    justify-content: space-between;
}
</style>