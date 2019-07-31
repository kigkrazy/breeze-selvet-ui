import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/mp/wxaccount/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/mp/wxaccount',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/mp/wxaccount/' + id,
    method: 'get'
  })
}

export function generateQr(appid) {
  return request({
    url: '/mp/wxaccount/qr/' + appid,
    method: 'post'
  })
}

export function delObj(id) {
  return request({
    url: '/mp/wxaccount/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/mp/wxaccount',
    method: 'put',
    data: obj
  })
}

export function fetchAccountList() {
  return request({
    url: '/mp/wxaccount/list',
    method: 'get'
  })
}

export function fetchStatistics(q) {
  return request({
    url: '/mp/wxaccount/statistics',
    method: 'get',
    params: q
  })
}
