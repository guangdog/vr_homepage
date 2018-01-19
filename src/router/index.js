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
        {path: 'openclass/gamesvideo', component: gamesvideo}
      ]
    }
  ]
})
