export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  viewBtn: true,
  addBtn: false,
  editBtn: false,
  align: 'center',
  column: [
    {
      label: '主键',
      prop: 'id',
      hide: false
    },
    {
      label: '公众号',
      prop: 'wxAccountName'
    },
    {
      label: '用户标识',
      prop: 'openid',
      overHidden: true
    },
    {
      label: '昵称',
      prop: 'nickname'
    },
    {
      label: '消息类型',
      prop: 'msgType'
    },
    {
      label: '内容',
      prop: 'content'
    },
    {
      label: '已回复',
      prop: 'isRes',
      type: 'select',
      dicUrl: '/admin/dict/type/response_type',
      search: true
    },
    {
      label: '创建时间',
      prop: 'createTime'
    },
    {
      label: '头像地址',
      prop: 'headimgUrl',
      type: 'upload',
      imgWidth: 60,
      imgFullscreen: true,
      editDisplay: false,
      addDisplay: false,
      listType: 'picture-img'
    }
  ]
}

export const tableResOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  viewBtn: true,
  editBtn: false,
  delBtn: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '回复人',
      prop: 'userName',
      addDisplay: false
    },
    {
      label: '回复内容',
      prop: 'resContent',
      type: 'textarea',
      span: 24,
      minRows: 5
    },
    {
      label: '时间',
      prop: 'createTime',
      addDisplay: false
    }
  ]
}
