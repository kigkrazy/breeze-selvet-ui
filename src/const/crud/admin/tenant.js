export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  column: [
    {
      label: '租户id',
      prop: 'id',
      hide: true,
      editDisabled: true,
      addDisplay: false
    },
    {
      label: '租户名称',
      prop: 'name',
      rules: [{
        required: true,
        message: '请输入租户名称',
        trigger: 'blur'
      }]
    },
    {
      label: '租户编号',
      prop: 'code',
      rules: [{
        required: true,
        message: '请输入租户编号',
        trigger: 'blur'
      }]
    },
    {
      label: '开始时间',
      prop: 'startTime',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      rules: [{
        required: true,
        message: '请输入结束时间',
        trigger: 'blur'
      }]
    },
    {
      label: '结束时间',
      prop: 'endTime',
      type: 'datetime',
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      rules: [{
        required: true,
        message: '请输入结束时间',
        trigger: 'blur'
      }]
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      dicUrl: '/admin/dict/type/status_type',
      search: true
    }
  ]
}
