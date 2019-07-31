import request from '@/router/axios'

export function getObj(id) {
  return request({
    url: '/mp/wxmenu/' + id,
    method: 'get'
  })
}

export function putObj(appId) {
  return request({
    url: '/mp/wxmenu/' + appId,
    method: 'put'
  })
}

export function delObj(appId) {
  return request({
    url: '/mp/wxmenu/' + appId,
    method: 'delete'
  })
}

export function addObj(appId, obj) {
  return request({
    url: '/mp/wxmenu/' + appId,
    method: 'post',
    data: obj
  })
}
