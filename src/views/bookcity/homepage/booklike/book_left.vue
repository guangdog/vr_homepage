<template>
	<div>
		<div class="top_lefts">
			<ul class="list_a">
				<li v-for="data in arr">
					<a><img :src="data.thumbnails" alt="" /></a>   
					<p class="name"><a>{{data.book_name}}</a></p>
					<p class="tname">
						<span class="tname_a">
							<span style="width: 90%;"></span>
						</span>
					</p>
					<p class="price">￥{{data.price}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { getCategoryById, listByPage } from '@/api/bookcity/homepage'
export default {
  data () {
    return {
      arr: [],
      book_name: '',
      author: '',
      show: []
    }
  },
  created () {
    var categoryArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    for (let index in categoryArr) {
      this.show[index] = {isShow: false, data: {}}
      getCategoryById({id: categoryArr[index]}).then(res => {
        this.show[index].data = res.data.data
      })
    }
    this.show[0].isShow = true
    this.queryList()
  },
  methods: {
    list (id, index) {
      for (let i in this.show) {
        this.show[i].isShow = false
      }
      this.show[index].isShow = true
      this.queryList(id)
    },
    queryList (id = 11) {
      listByPage({page: 1, limit: 10, category_id: id}).then(res => {
        this.arr = res.data.data
      })
    }
  }
}
</script>

<style scoped>
  .price{
  	padding: 0 0 0 23px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    font-size: 14px;
    display: block;
    margin-top: 10px;
    color: red;
    font-weight: bold;
    font-family: "微软雅黑";
  }
  .tname_a span{
  	display: block;
    height: 13px;
    font-size: 0;
    width: 69px;
    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/book_star_bg.png) 0 top repeat-x;
  }
  .tname_a{
  	display: inline-block;
    height: 13px;
    font-size: 0;
    width: 69px;
    background: url(http://book.dangdang.com/Standard/Book/Extend/hosts/images/home/book_star_bg.png) 0 bottom repeat-x;
    position: relative;
    top: 1px;
  }
  .tname{
  	height: 14px;
    padding: 3px 0 3px 22px;
    margin-top: -5px;
  }
  .name{
  	padding: 7px 23px 0;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    font-size: 10px;
  }
  .name:hover{
  	color: #EC7814;
  	text-decoration: underline;
  	cursor: pointer;
  }
  .list_a li{
  	width: 150px;
    margin-right: 47px;
    float: left;
    position: relative;
    margin-bottom: 17px;
  }
  .list_a{
  	width: 1000px;
    position: relative;
    left: 0;
    margin-left: 20px;
  }
  .list_a img{
  	cursor: pointer;
  }
  .top_lefts{
  	width: 960px;
    float: left;
    position: relative;
    overflow: hidden;
    padding-top: 20px;
    height: 490px;
    margin-top: 50px;
    margin-left: -1200px;
  }
</style>