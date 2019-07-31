export const tableOption = {
  border: true,
  index: true,
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuBtn: true,
  editBtn: false,
  delBtn: false,
  addBtn: false,
  menuType: 'menu',
  column: [
    {
      label: 'ID',
      prop: 'taskId',
      editDisabled: true,
      addDisplay: false
    },
    {
      label: '任务名称',
      prop: 'taskName',
      editDisabled: true,
      addDisplay: false
    },
    {
      label: '提交时间',
      prop: 'time',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm'
    }
  ]
}
export const formOption = {
  submitBtn: false,
  emptytBtn: false,
  row: true,
  span: 12,
  column: [
    {
      label: '任务编号',
      prop: 'taskId',
      disabled: true
    },
    {
      label: '任务名称',
      prop: 'taskName',
      disabled: true
    },
    {
      label: '申请人',
      prop: 'username',
      disabled: true
    },
    {
      label: '请假时长',
      prop: 'days',
      disabled: true
    },
    {
      label: '请假时间',
      prop: 'createTime',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      disabled: true
    },
    {
      label: '提交时间',
      prop: 'time',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm',
      disabled: true
    },
    {
      label: '事由',
      prop: 'content',
      type: 'textarea',
      minRows: 2,
      row: true,
      span: 24,
      disabled: true
    },
    {
      label: '批注',
      prop: 'comment',
      type: 'textarea',
      minRows: 2,
      row: true,
      span: 24,
      rules: [{
        required: true,
        message: '请输入备注',
        trigger: 'blur'
      }]
    }
  ]
}

export const taskOption = {
  menu: false,
  page: false,
  addBtn: false,
  align: 'center',
  menuAlign: 'center',
  column: [
    {
      label: 'id',
      prop: 'id',
      hide: true
    },
    {
      label: '用户',
      prop: 'userId'
    },
    {
      label: '批注',
      prop: 'fullMessage'
    }, {
      label: '操作时间',
      prop: 'time',
      type: 'datetime',
      format: 'yyyy-MM-dd hh:mm:ss',
      valueFormat: 'yyyy-MM-dd hh:mm:ss'
    }
  ]
}
