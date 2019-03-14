import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/job/sysjob/page',
    method: 'get',
    params: query
  })
}

export function getJobLogList(query) {
  return request({
    url: '/job/sysjob/getJobLog',
    method: 'get',
    params: query
  })
}

export function shutdownJobsRa() {
  return request({
    url: '/job/sysjob/shutdownJobs',
    method: 'post'
  })
}

export function startJobsRa() {
  return request({
    url: '/job/sysjob/startJobs',
    method: 'post'
  })
}

export function refreshJobsRa() {
  return request({
    url: '/job/sysjob/refreshJobs',
    method: 'post'
  })
}

export function startJobRa(jobId) {
  return request({
    url: '/job/sysjob/startJob/' + jobId,
    method: 'get'
  })
}

export function shutDownJobRa(jobId) {
  return request({
    url: '/job/sysjob/shutdownJob/' + jobId,
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: '/job/sysjob',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/job/sysjob/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/job/sysjob/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/job/sysjob',
    method: 'put',
    data: obj
  })
}

export function isValidCron(obj) {
  return request({
    url: "/job/sysjob/isValidCron?cronExpression=" + obj,
    method: 'post',
  })
}

export function isValidTaskName(jobName, jobGroup) {
  return request({
    url: "/job/sysjob/isValidTaskName?jobName=" + jobName + "&jobGroup=" + jobGroup,
    method: 'post',
  })
}
