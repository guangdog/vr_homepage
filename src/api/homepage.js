import service from '../utils/service'
export function getData () {
  return service({
    url: '',
    methods: 'get'
  })
}
