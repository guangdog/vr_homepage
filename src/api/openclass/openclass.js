import service from '@/utils/service'
export function getdata () {
  return service({
    url: '/hireoutsideprojects/list',
    methods: 'get'
  })
}
export function getopencategories (params) {
  return service({
    url: '/opencategories/list',
    methods: 'get',
    params
  })
}
