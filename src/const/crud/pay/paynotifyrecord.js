/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: 'ID',
      prop: 'id'
    },
    {
      label: '响应ID',
      prop: 'notifyId'
    },
    {
      label: '请求报文',
      prop: 'request'
    },
    {
      label: '响应报文',
      prop: 'response'
    },
    {
      label: '系统订单号',
      prop: 'orderNo'
    },
    {
      label: 'http状态',
      prop: 'httpStatus'
    },
    {
      label: '删除标记',
      prop: 'delFlag'
    },
    {
      label: '创建时间',
      prop: 'createTime'
    },
    {
      label: '更新时间',
      prop: 'updateTime'
    },
    {
      label: '租户ID',
      prop: 'tenantId'
    }
  ]
}
