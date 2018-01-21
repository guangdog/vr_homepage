import Vue from 'vue'
import Router from 'vue-router'
// 登录
import login from '../views/login.vue'
// 注册
import register from '../views/register.vue'
// 主页面
import pageShow from '../views/pageShow.vue'
// 首页
import homepage from '../views/homepage/homepage.vue'
// 招聘外包
import recruitHomepage from '../views/recruit/homepage/Homepage'
import epiboly from '../views/recruit/homepage/epiboly/epiboly'
import specific from '../views/recruit/homepage/specific/specific'
// 公开课
import openclass from '../views/openclass/openclass'
import audiodetails from '../views/openclass/audiodetails/audiodetails'
import gamesvideo from '../views/openclass/gamesvideo/gamevideo'
// 书城
import bookcity from '../views/bookcity/homepage/homepage.vue'
import booksdetails from '../views/bookcity/details/booksdetails.vue'
import bookjump from '../views/bookcity/bookjump/bookjump.vue'
// 资讯
import vrInformation from '../views/VR-zx/zx.vue'
import informationList from '../views/VR-zx/VR-zym/list.vue'
// 社区
import community from '../views/community/community'
import communitylist from '../views/community/sq-zym/list'
import xqy from '../views/community/sq-zym/xqy'
import addPost from '../views/community/sq-zym/addPost'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'pageshow'},
    {path: '/login', component: login},
    {path: '/register', component: register},
    {
      path: '/pageshow',
      component: pageShow,
      children: [
        {path: '/', redirect: 'homepage'},
        // 首页
        {path: 'homepage', component: homepage},
        // 招聘外包
        {path: 'recruit', component: recruitHomepage},
        {path: 'recruit/epiboly/:id', component: epiboly},
        {path: 'recruit/specific/:id', component: specific},
        // 公开课
        {path: 'openclass', component: openclass},
        {path: 'openclass/audiodetails/:id', component: audiodetails},
        {path: 'openclass/gamesvideo', component: gamesvideo},
        // 书城
        {path: 'bookcity', component: bookcity},
        {path: 'bookcity/booksdetails/:id', component: booksdetails},
        {path: 'bookcity/bookjump/:id', component: bookjump},
        // 资讯
        {path: 'vrInformation', component: vrInformation},
        {path: 'vrInformation/list/:id', component: informationList},
        // 社区
        {path: 'community', component: community},
        {path: 'community/list/:id', component: communitylist},
        {path: 'community/list/:category_id', component: communitylist},
        {path: 'community/xqy/:id', component: xqy},
        {path: 'community/addPost', component: addPost}
      ]
    }
  ]
})
