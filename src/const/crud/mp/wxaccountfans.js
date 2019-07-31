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
      label: '昵称',
      prop: 'nickname',
      overHidden: true
    },
    {
      label: '用户标识',
      prop: 'openid',
      overHidden: true
    },
    {
      label: '性别',
      prop: 'gender',
      type: 'select',
      dicUrl: '/admin/dict/type/gender'
    },
    {
      label: '语言',
      prop: 'language',
      hide: true
    },
    {
      label: '国家',
      prop: 'country',
      hide: true
    },
    {
      label: '省份',
      prop: 'province',
      hide: true
    },
    {
      label: '城市',
      prop: 'city'
    },
    {
      label: '订阅状态',
      prop: 'subscribeStatus',
      type: 'select',
      dicUrl: '/admin/dict/type/subscribe'
    },
    {
      label: '订阅时间',
      prop: 'subscribeTime'
    },
    {
      label: '备注',
      prop: 'remark',
      hide: true
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
