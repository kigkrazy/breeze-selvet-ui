import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/job/sysjoblog/page',
    method: 'get',
    params: query
  })
}

