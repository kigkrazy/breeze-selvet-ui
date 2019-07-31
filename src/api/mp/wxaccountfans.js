import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/mp/wxaccountfans/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/mp/wxaccountfans',
    method: 'post',
    data: obj
  })
}

export function sync(appId) {
  return request({
    url: '/mp/wxaccountfans/sync/' + appId,
    method: 'post'
  })
}

export function getObj(id) {
  return request({
    url: '/mp/wxaccountfans/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/mp/wxaccountfans/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/mp/wxaccountfans',
    method: 'put',
    data: obj
  })
}
