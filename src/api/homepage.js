import service from '../utils/service'
export function bannerList () {
  return service({
    url: 'banner/list',
    methods: 'get'
  })
}
export function homeadsList () {
  return service({
    url: 'homeads/list',
    methods: 'get'
  })
}
