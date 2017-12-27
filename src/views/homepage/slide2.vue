<template>
    <div class="ranking_list">
        <div class="rank_box">
            <h4 class="rank_boxh41">
                <i><img src="../../assets/images/homepage/rank1.png" /></i>
                
                <a href="http://www.52vr.com/forum/unreal">虚幻UE4</a>
            </h4>
            <div class="rank_box_list">
                <ul class="rank_box_ul">
                    <li class="current" style="height: 207px; display: list-item;" v-for="dates in arr">
                        <div class="rank-show-title">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <div class="rank_box_tit" >
                                    <p>{{dates.tname}}</p>
                                </div>
                            </a>
                        </div>
                        <div class="rank-show-block" >
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <img  :src="dates.timg" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="rank_box">
            <h4 class="rank_boxh42">
                <i><img src="../../assets/images/homepage/rank2.png" /></i>
                
                <a href="http://www.52vr.com/forum/hololens">AR-Hololens</a>
            </h4>
            <div class="rank_box_list">
                <ul class="rank_box_ul">
                    <li class="current" style="height: 207px; display: list-item;" v-for="dates in arr">
                        <div class="rank-show-title">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <div class="rank_box_tit">
                                    <p>{{dates.tname}}</p>
                                </div>
                            </a>
                        </div>
                        <div class="rank-show-block">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <img  :src="dates.timg" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="rank_box">
            <h4 class="rank_boxh43">
                <i><img src="../../assets/images/homepage/rank3.png" /></i>
                
                <a href="http://www.52vr.com/forum/unity">Unity</a>
            </h4>
            <div class="rank_box_list">
                <ul class="rank_box_ul">
                    <li class="current" style="height: 207px; display: list-item;"  v-for="dates in arr">
                        <div class="rank-show-title">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <div class="rank_box_tit">
                                    <p>{{dates.tname}}</p>
                                </div>
                            </a>
                        </div>
                        <div class="rank-show-block">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <img  :src="dates.timg" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="rank_box">
            <h4 class="rank_boxh44">
                <i><img src="../../assets/images/homepage/rank4.png" /></i>
                
                <a href="http://www.52vr.com/forum/models">模型库</a>
            </h4>
            <div class="rank_box_list">
                <ul class="rank_box_ul">
                    <li class="current" style="height: 207px; display: list-item;" v-for="dates in arr">
                        <div class="rank-show-title">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <div class="rank_box_tit">
                                    <p>{{dates.tname}}</p>
                                </div>
                            </a>
                        </div>
                        <div class="rank-show-block">
                            <a href="http://www.52vr.com/thread-36723-1-1.html">
                                <img  :src="dates.timg" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
  data () {
    return {
      arr: [
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'},
        {tname: '虚幻氪金VR逆袭', timg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2232321279,3451331718&fm=27&gp=0.jpg'}
      ]
    }
  }
}
</script>

<style scoped>
    .ranking_list{
        display: flex;
        width: 1190px;
        margin: 30px auto 15px;
        justify-content: space-around;
        
    }
    .ranking_list .rank_box{
        width: 24%;
        display: inline-block;

    }
    .rank_box  h4{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: relative;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
    }
    .rank_box h4 i{
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        line-height: 60px;
        font-size: 30px;
        text-align: center;
        position: absolute;
        left: 15px;
        bottom: 20px;
        background: #FFFFFF;
        z-index: 99;
    }
    .rank_boxh41{
        background: #75d09f;
    }
    .rank_boxh42{
        background:#ffb85c;
    }
    .rank_boxh43{
        background:#ff9066;
    }
    .rank_boxh44{
        background:#d6ade7;
    }
    .h4 i img{
        width: 50px;
        margin-top: 5px;
    }
    .rank_box h4 a{
        color: #FFFFFF;
    }
    .rank_box .rank_box_list{
        width: 100%;
        border-top: 0;
        overflow: hidden;
    }
    .rank_box_ul{
        padding: 0px;
        position: relative;
    }
    .rank-show-title{
        font-size: 14px;
    }
    .rank-show-title a{
        display: block;
        height: 47px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .rank_box_tit{
        padding: 15px 0;
        overflow: hidden;
        line-height: 16px;
        height: 16px;
        border-top: 1px dashed #EDEDED;
        background: #fff;
    }
    .rank_box_ul li{
        line-height: 47px;
        overflow: hidden;
        position: relative;
        zoom: 1;
        list-style: none;
    }
    .rank_box_ul li img{
        width: 260px;
        height: 152px;
    }
    .rank-show-block{
        border-bottom: 1px dashed #EDEDED;
    }
</style>