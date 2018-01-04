<template>
    <div class="slide2">
        <item :arr="dataObj.arr1" :color="'#75d09f'">
            <h4 class="rank_boxh41" slot="top">
                <i><img src="../../assets/images/homepage/rank1.png" /></i>
                <a href="http://www.52vr.com/forum/unreal">虚幻UE4</a>
            </h4>
        </item>
        <item :arr="dataObj.arr2" :color="'#ffb85c'">
             <h4 class="rank_boxh42" slot="top">
                <i><img src="../../assets/images/homepage/rank2.png" /></i>
                <a href="http://www.52vr.com/forum/hololens">AR-Hololens</a>
            </h4>
        </item>
        <item :arr="dataObj.arr3" :color="'#ff9066'">
            <h4 class="rank_boxh43" slot="top">
                <i><img src="../../assets/images/homepage/rank3.png" /></i>
                <a href="http://www.52vr.com/forum/unity">Unity</a>
            </h4>
        </item>
        <item :arr="dataObj.arr4" :color="'#d6ade7'">
            <h4 class="rank_boxh44" slot="top">
                <i><img src="../../assets/images/homepage/rank4.png" /></i>
                <a href="http://www.52vr.com/forum/models">模型库</a>
            </h4>
        </item>
    </div>
</template>
<script>
import item from './slide2/item.vue'
import {bbsinfosListByPage} from '../../api/homepage'
export default{
  components: {
    item
  },
  data () {
    return {
      arr: [
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '321'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '12'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '11'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '32'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '22'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '44'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '66'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '66'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '66'},
        {title: '虚幻氪金VR逆袭', thumbnail: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg', pv: '66'}
      ],
      dataObj: {
        arr1: [],
        arr2: [],
        arr3: [],
        arr4: []
      }
    }
  },
  methods: {
    query (i, id) {
      var listQuery = {
        page: 1,
        limit: 10,
        category_id: id
      }
      bbsinfosListByPage(listQuery).then(res => {
        this.dataObj['arr' + i] = res.data.data
      })
    }
  },
  created () {
    this.query(1, 16)
    this.query(2, 33)
    this.query(3, 15)
    this.query(4, 11)
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