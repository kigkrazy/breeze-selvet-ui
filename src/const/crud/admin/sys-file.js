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
  editBtn: false,
  delBtn: false,
  addBtn: false,
  viewBtn:true,
  column: [
	  /*{
      label: '编号',
      prop: 'id'
    },*/
	  {
      label: '文件名',
      prop: 'name'
    },
	  /*{
      label: '保存路径',
      prop: 'path'
    },
	  {
      label: '绝对路径',
      prop: 'absolutePath'
    },
	  {
      label: '上传服务器前缀地址',
      prop: 'prefix'
    },*/
	  {
      label: '原文件名',
      prop: 'original'
    },
	  {
      label: '后缀名',
      prop: 'suffix'
    },
	  {
      label: '文件类型',
      prop: 'type'
    },
	  /*{
      label: '文件大小',
      prop: 'fileSize'
    },*/
	  {
      label: '显示大小',
      prop: 'displaySize'
    },
  ]
}
