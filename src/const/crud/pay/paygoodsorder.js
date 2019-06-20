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
      label: '商品订单ID',
      prop: 'goodsOrderId'
    },
    {
      label: '商品ID',
      prop: 'goodsId'
    },
    {
      label: '商品名称',
      prop: 'goodsName'
    },
    {
      label: '金额,单位元',
      prop: 'amount'
    },
    {
      label: '用户ID',
      prop: 'userId'
    },
    {
      label: '订单状态,订单生成(0),支付成功(1),处理完成(2),处理失败(-1)',
      prop: 'status'
    },
    {
      label: '支付订单号',
      prop: 'payOrderId'
    },
    {
      label: '0-正常,1-删除',
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
