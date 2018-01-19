import service from '../../utils/service'
// 轮播图列表
export function bannerList () {
  return service({
    url: 'banner/list',
    method: 'get'
  })
}
// 广告列表
export function homeadsList () {
  return service({
    url: 'homeads/list',
    method: 'get'
  })
}
// 友情链接
export function homelinks () {
  return service({
    url: 'homelinks/list',
    method: 'get'
  })
}
// 通过分类ID获取所有资讯
export function infosGetByCateId (params) {
  return service({
    url: 'infos/getByCateId',
    method: 'get',
    params
  })
}
// 最新资讯
export function infosGetByLimit (params) {
  return service({
    url: 'infos/list',
    method: 'get',
    params
  })
}
// 最新讨论
export function bbsinfosGetByLimit (params) {
  return service({
    url: 'bbsinfos/list',
    method: 'get',
    params
  })
}
// 帖子按照分类查询
export function bbsinfosListByPage (params) {
  return service({
    url: 'bbsinfos/listByPage',
    method: 'get',
    params
  })
}
