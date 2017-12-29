import service from '../utils/service'
// 轮播图列表
export function bannerList () {
  return service({
    url: 'banner/list',
    methods: 'get'
  })
}
// 广告列表
export function homeadsList () {
  return service({
    url: 'homeads/list',
    methods: 'get'
  })
}
// 通过分类ID获取所有资讯
export function infosGetByCateId (params) {
  return service({
    url: 'infos/getByCateId',
    methods: 'get',
    params
  })
}
// 最新资讯
export function infosGetByLimit (params) {
  return service({
    url: 'infos/list',
    methods: 'get',
    params
  })
}
// 最新讨论
export function bbsinfosGetByLimit (params) {
  return service({
    url: 'bbsinfos/list',
    methods: 'get',
    params
  })
}
