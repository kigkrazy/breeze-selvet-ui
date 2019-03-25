import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/job/sys-job/page',
    method: 'get',
    params: query
  })
}

export function getJobLogList(query) {
  return request({
    url: '/job/sys-job/job-log',
    method: 'get',
    params: query
  })
}

export function shutdownJobsRa() {
  return request({
    url: '/job/sys-job/shutdown-jobs',
    method: 'post'
  })
}

export function startJobsRa() {
  return request({
    url: '/job/sys-job/start-jobs',
    method: 'post'
  })
}

export function refreshJobsRa() {
  return request({
    url: '/job/sys-job/refresh-jobs',
    method: 'post'
  })
}

export function startJobRa(jobId) {
  return request({
    url: '/job/sys-job/start-job/' + jobId,
    method: 'get'
  })
}

export function shutDownJobRa(jobId) {
  return request({
    url: '/job/sys-job/shutdown-job/' + jobId,
    method: 'get'
  })
}

export function addObj(obj) {
  return request({
    url: '/job/sys-job',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/job/sys-job/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/job/sys-job/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/job/sys-job',
    method: 'put',
    data: obj
  })
}

export function isValidCron(obj) {
  return request({
    url: "/job/sys-job/is-valid-cron?cronExpression=" + obj,
    method: 'post',
  })
}

export function isValidTaskName(jobName, jobGroup) {
  return request({
    url: "/job/sys-job/is-valid-task-name?jobName=" + jobName + "&jobGroup=" + jobGroup,
    method: 'post',
  })
}
