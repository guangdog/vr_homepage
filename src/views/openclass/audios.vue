<template>
  <div>
  <div class="zb_past">
    <h3>{{name}}</h3>
    <div class="zb_past_sec">
      <!--[diy=diy8]-->
      <div id="diy8" class="area">
        <div id="frame27fecE" class="frame move-span cl frame-1">
          <div id="frame27fecE_left" class="column frame-1-c">
            <div id="frame27fecE_left_temp" class="move-span temp"></div>
            <div id="portal_block_2194" class="block move-span">
              <div id="portal_block_2194_content" class="dxb_bc">
                <div class="portal_block_summary">
                  <div class="zb_past_sec_one" v-for="item in data">
                    <router-link :to="{name:'audiodetails',params:{id:item.id}}">
                        <img :src="item.Bannerurl" alt="VR硬件DIY-VR数字手套制作（下）" title="VR硬件DIY-VR数字手套制作（下）" style="width: 100%;height:180px">
                    </router-link>

                    <p>{{item.name}}</p>
                    <div class="zb_past_sec_one_div1">{{item.pv}}人浏览<span>0人回复</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
import { getopencategories } from '@/api/openclass/openclass'
export default {
  props: ['id', 'name'],
  data () {
    return {
      data: []
    }
  },
  created () {
    getopencategories({parent_id: this.id}).then((res) => {
      this.data = res.data.data
    })
  }
}
</script>
<style scoped>
  .zb_past {
    width: 1190px;
    margin-top: 40px;
}

  .zb_past h3 {
    height: 55px;
    text-align: center;
    font-size: 16px;
    color: #000;
    margin-bottom: 65px;
    background: url(http://www.52vr.com/template/default/zb_past_tit.png) 519px
      45px no-repeat;
  }

  .portal_block_summary {
    width: 1190px;
    display:flex;
    justify-content:flex-start;
    flex-wrap: wrap;
  }

  .zb_past_sec_one {
    width: 280px;
    height: 260px;
    margin-bottom: 15px;
    margin-left:15px;
    background: #fff;
  }

  .zb_past_sec_one p {
    width: 265px;
    height: 40px;
    padding: 0 10px;
    line-height: 46px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .zb_past_sec_one_div1 {
    padding: 6px 15px;
    font-size: 12px;
    color: #999;
}
.zb_past_sec_one_div1 span {
    float: right;
}
</style>
