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
      label: '支付订单号',
      prop: 'orderId'
    },
    {
      label: '渠道ID',
      prop: 'channelId'
    },
    {
      label: '支付金额,单位分',
      prop: 'amount'
    },
    {
      label: '三位货币代码,人民币:cny',
      prop: 'currency'
    },
    {
      label: '支付状态,0-订单生成,1-支付中(目前未使用),2-支付成功,3-业务处理完成',
      prop: 'status'
    },
    {
      label: '客户端IP',
      prop: 'clientIp'
    },
    {
      label: '设备',
      prop: 'device'
    },
    {
      label: '商品标题',
      prop: 'subject'
    },
    {
      label: '商品描述信息',
      prop: 'body'
    },
    {
      label: '特定渠道发起时额外参数',
      prop: 'extra'
    },
    {
      label: '渠道商户ID',
      prop: 'channelMchId'
    },
    {
      label: '渠道订单号',
      prop: 'channelOrderNo'
    },
    {
      label: '渠道支付错误码',
      prop: 'errCode'
    },
    {
      label: '渠道支付错误描述',
      prop: 'errMsg'
    },
    {
      label: '扩展参数1',
      prop: 'param1'
    },
    {
      label: '扩展参数2',
      prop: 'param2'
    },
    {
      label: '通知地址',
      prop: 'notifyUrl'
    },
    {
      label: '通知次数',
      prop: 'notifyCount'
    },
    {
      label: '最后一次通知时间',
      prop: 'lastNotifyTime'
    },
    {
      label: '订单失效时间',
      prop: 'expireTime'
    },
    {
      label: '订单支付成功时间',
      prop: 'paySuccTime'
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
      label: '删除标记',
      prop: 'delFlaag'
    },
    {
      label: '租户ID',
      prop: 'tenantId'
    }
  ]
}
