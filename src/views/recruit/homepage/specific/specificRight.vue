<template>
  <div id="app">
    <div v-for="data in arr">
    <h2>{{data.name}}</h2>
    <!-- <p>发表时间：2018-1-3 10:27 | 浏览：123 评论：0<button>回复</button></p> -->
    <p>发表时间：{{time1}}&nbsp;&nbsp;{{time2}} | 浏览：{{data.pv}} 评论：0<button>回复</button></p>
    <div id="">
      <table summary="分类信息" cellpadding="0" cellspacing="0" class="cgtl mbm">
      <caption>招聘</caption>
      <tbody><tr>
      <th>工作地点:</th>
      <td>广东 &raquo; 广州 </td>
      </tr>
      <tr>
      <th>公司名称:</th>
      <td>广州市梦途信息科技有限责任公司 </td>
      </tr>
      <tr>
      <th>薪金:</th>
      <td>面议 </td>
      </tr>
      <tr>
      <th>岗位要求:</th>
      <td>1、负责公司产品对外的推广和管理， <br />
      2、根据营销策略，开拓市场，与中大型企业等进行前期洽谈工作； <br />
      3、进行市场调研与分析；<br />
      4、根据市场分析，快速调整各阶段业务的推进方式和营销策略的实施； <br />
      5、组建培训并管理团队。 </td>
      </tr>
      <tr>
      <th>能力要求:</th>
      <td>1、本科及以上学历，具有5年以上互联网企业或游戏市场推广工作经验，3年以上市场团队管理经验 ；<br />
      3、具备较广的行业人脉，能够快速有效的获取资源; <br />
      4、沟通能力强，具有较强的开拓能力； <br />
      5、认同公司产品的商业模式，对其市场投放有极大的热情。 </td>
      </tr>
      <tr>
      <th>简历邮箱:</th>
      <td>此内容需要积分,<a href="#"><font color="#FF0000">点击支付2积分查看联系方式</font></a> </td>
      </tr>
      <tr>
      <th>联系方式:</th>
      <td>此内容需要积分,<a href="#" ><font color="#FF0000">点击支付2积分查看联系方式</font></a> </td>
      </tr>
      <tr>
      <th>简历要求:</th>
      <td>【投送简历时，请务必注明是在52VR.COM看到的】 </td>
      </tr>
      </tbody>
      </table>
    </div>
    <div>
      <table>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
import {getOutsourcing} from '@/api/recruit/homepage.js'
export default {
  data () {
    return {
      arr: [],
      id: '',
      time1: '',
      time2: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    getOutsourcing({id: this.id}).then((res) => {
      this.arr = res.data
      this.time1 = this.arr.data.created_time.slice(0, 10)
      this.time2 = this.arr.data.created_time.slice(11, 19)
    })
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  background: white !important;
  text-decoration: none;
}
*[data-v-965ed910] {
    margin: 0;
    padding: 0;
    background: white !important;
}
#app h2{
  padding-top: 30px;
  margin-left: 20px;
}
#app p{
  margin-left: 10px;
  padding-left: 10px;
  background: #eeeeee !important;
  line-height: 36px;
  color: #666;
  width: 95%;
  margin-top: 20px;
  font-size: 12px;
}
#app p button{
  float: right;
  border: none;
  background: #515151 !important;
  border-radius: 3px;
  color: white;
  padding: 0 5px;
}
#app p button:hover{
  background: #f60 !important;
}

.cgtl caption {
    background: #fff;
    border-top: 1px solid #EDEDED;
    font-size: 14px;
    font-weight: 700;
}
.cgtl{
    margin-top: 20px;
    margin-left: 20px;
    font-size: 12px;
    width: 95%;
}
.cgtl td, .cgtl th, .cgtl caption {
    padding: 5px;
    border-bottom: 1px solid #EDEDED;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
table {
    empty-cells: show;
    border-collapse: collapse;
} 
.cgtl td, .cgtl th, .cgtl caption {
    padding: 10px;
    border-bottom: 1px solid #EDEDED;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
</style>
