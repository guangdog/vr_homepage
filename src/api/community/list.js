import request from '@/utils/service'
// 获取轮播图数据
export function bbsslide (query) {
  return request({
    url: '/bbsslide/list',
    methods: 'get',
    params: query
  })
}
// 获取社区所有板块分类
export function bbscategories (query) {
  return request({
    url: '/bbscategories/list',
    methods: 'get',
    params: query
  })
}
// 获取广告地址
export function imgList (query) {
  return request({
    url: '/bbsads/list',
    methods: 'get',
    params: query
  })
}
// 根据pid渲染二级列表
export function getModelByPid (query) {
  return request({
    url: '/bbscategories/getModelByPid',
    methods: 'get',
    params: query
  })
}

// 根据id渲染帖子列表
export function bbsinfosList (query) {
  return request({
    url: '/bbsinfos/list',
    methods: 'get',
    params: query
  })
}

// 根据id渲染子页面
export function listByPage (query) {
  return request({
    url: '/bbsinfos/listByPage',
    methods: 'get',
    params: query
  })
}

// 根据id渲染子页面
export function getModelById (query) {
  return request({
    url: '/bbscategories/getModelById',
    methods: 'get',
    params: query
  })
}

// 添加帖子列表
export function addPost (data) {
  return request({
    url: '/bbsinfos/add',
    method: 'post',
    data
  })
}
