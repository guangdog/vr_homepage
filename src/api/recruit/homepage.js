import service from '@/utils/service'
export function getdata () {
  return service({
    url: '/hireoutsideprojects/list',
    methods: 'get'
  })
}
export function getposition () {
  return service({
    url: '/hirejobs/list',
    methods: 'get'
  })
}
export function adddate (data) {
  return service({
    url: '',
    methods: 'post',
    data
  })
}
export function getcompony () {
  return service({
    url: '/hirecompanies/list',
    methods: 'get'
  })
}
export function getprovinces () {
  return service({
    url: '/hireprovinces/list',
    methods: 'get'
  })
}
export function getpricerange () {
  return service({
    url: '/hirepricerange/list',
    methods: 'get'
  })
}
export function getdataById (params) {
  return service({
    url: '/hireoutsideprojects/listByPage',
    methods: 'get',
    params
  })
}
export function getOutsourcing (params) {
  return service({
    url: '/hireoutsideprojects/getById',
    methods: 'get',
    params
  })
}
