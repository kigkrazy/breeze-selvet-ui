import {isValidCron} from '@/api/daemon/sysjob'

var validateCron = (rule, value, callback) => {
  isValidCron(value).then(response => {
    let result = response.data.data;
    if (result != 0) {
      callback(new Error('cron表达式错误'))
    } else {
      callback();
    }
  })
}
export const tableOption = {
    border: true,
    card: true,
    index: true,
    indexLabel: '序号',
    stripe: true,
    menu: true,
    menuAlign: 'center',
    filterBtn: false,
    menuWidth: 300,
    align: 'left',
    viewBtn: false,
    editBtn: false,
    delBtn: false,
    addBtn: false,
    dialogWidth: '85%',
    labelWidth: 130,
    dialogHeight: '78%',
    column: [
      {
        label: 'jobId',
        prop: 'jobId',
        hide: true,
        addVisdiplay: false,
        editVisdiplay: false,
        rules:
          [{
            required: true,
            message: '请输入任务类型',
            trigger: 'blur'
          }]
      },
      {
        label: '任务名称',
        prop: 'jobName',
        search: true,
        placeholder: "任务名称",
        rules: [{
          required: true,
          message: '请输入任务名称',
          trigger: 'blur'
        }],
        editDisabled: true
      },
      {
        label: '任务组名',
        prop:
          'jobGroup',
        search:
          true,
        rules:
          [{
            required: true,
            message: '请输入任务组名',
            trigger: 'blur'
          }],
        editDisabled: true
      },
      {
        label: '任务状态',
        prop: 'jobStatus',
        type: 'select',
        dicUrl: '/admin/dict/type/job_status',
        dicMethod: 'get',
        addVisdiplay: false,
        search:
          true,
        slot:
          true
      }
      ,
      {
        label: '执行状态',
        prop: 'jobExecuteStatus',
        type: 'select',
        dicUrl: '/admin/dict/type/job_execute_status',
        dicMethod: 'get',
        addVisdiplay: false,
        search: true,
        slot: true
      }
      ,
      {
        label: '创建者',
        prop:
          'createBy',
        hide:
          true,
        addVisdiplay:
          false,
        editVisdiplay:
          false
      }
      ,
      {
        label: '创建时间',
        prop:
          'createTime',
        type:
          'datetime',
        hide:
          true,
        format:
          'yyyy-MM-dd HH:mm:ss',
        valueFormat:
          'yyyy-MM-dd HH:mm:ss',
        width:
          120,
        addVisdiplay:
          false,
        editVisdiplay:
          false
      }
      ,
      {
        label: '更新者',
        prop:
          'updateBy',
        hide:
          true,
        addVisdiplay:
          false,
        editVisdiplay:
          false
      }
      ,
      {
        label: '更新时间',
        prop:
          'updateTime',
        type:
          'datetime',
        hide:
          true,
        format:
          'yyyy-MM-dd HH:mm:ss',
        valueFormat:
          'yyyy-MM-dd HH:mm:ss',
        width:
          160,
        addVisdiplay:
          false,
        editVisdiplay:
          false
      }
      ,
      {
        label: '首次执行时间',
        prop:
          'starttime',
        type:
          'datetime',
        format:
          'yyyy-MM-dd HH:mm:ss',
        valueFormat:
          'yyyy-MM-dd HH:mm:ss',
        width:
          160,
        addVisdiplay:
          false,
        editDisabled:
          true
      }
      ,
      {
        label: '上次执行时间',
        prop:
          'previoustime',
        type:
          'datetime',
        format:
          'yyyy-MM-dd HH:mm:ss',
        valueFormat:
          'yyyy-MM-dd HH:mm:ss',
        width:
          160,
        addVisdiplay:
          false,
        editDisabled:
          true
      }
      ,
      {
        label: '下次执行时间',
        prop:
          'nexttime',
        type:
          'datetime',
        format:
          'yyyy-MM-dd HH:mm:ss',
        valueFormat:
          'yyyy-MM-dd HH:mm:ss',
        width:
          160,
        addVisdiplay:
          false,
        editDisabled:
          true
      }
      ,
      {
        label: '组内顺序',
        prop:
          'jobOrder',
        hide: true,
        addDisplay: false,
        editDisplay: false,
        rules: [{ validator: (rule, value, callback) => {
            if(value>9){
              callback(new Error('请输入1-9数字') );
            }
            callback();

          }, trigger: 'blur' }],
      }
      ,
      {
        label: '类型',
        prop:
          'jobType',
        type:
          'select',
        dicUrl:
          '/admin/dict/type/job_type',
        dicMethod:
          'get',
        width: 100,
        rules:
          [{
            required: true,
            message: '请输入任务类型',
            trigger: 'blur'
          }]
      }
      ,
      {
        label: '执行路径',
        prop:
          'executePath',
        overHidden:
          true,
      }
      ,
      {
        label: '执行文件',
        prop:
          'className',
        overHidden:
          true
      }
      ,
      {
        label: '执行方法',
        prop:
          'methodName',
        overHidden:
          true,
        width:
          120
      }
      ,
      {
        label: '执行参数值',
        prop:
          'methodParamsValue',
        width:
          100,
        overHidden:
          true,
      }
      ,
      {
        label: 'cron表达式',
        prop:
          'cronExpression',
        width:
          100,
        overHidden:
          true,
        rules:
          [{
            required: true,
            max: 200,
            message: '请输入cron表达式',
            trigger: 'blur'
          }, {validator: validateCron, trigger: 'blur'}]

      }
      ,
      {
        label: '错失执行策略',
        prop:
          'misfirePolicy',
        type:
          'select',
        dicUrl:
          '/admin/dict/type/misfire_policy',
        dicMethod:
          'get',
        width:
          120,
        rules:
          [{
            required: true,
            message: '请输入任务错失执行策略',
            trigger: 'blur'
          }]
      }
      ,
      {
        label: '租户',
        prop:
          'tenantId',
        hide: true,
        addVisdiplay:
          false,
        editVisdiplay:
          false
      }
      ,
      {
        label: '备注信息',
        prop:
          'remark',
        type:
          'textarea',
        span:
          20,
        overHidden:
          true,
        rules:
          [{
            max: 500,
            message: '备注信息不得超过500',
            trigger: 'blur'
          }]
      }
    ]
  }
;

export const tableLogOption = {
  border: true,
  index: false,
  menu: false,
  page: true,
  indexLabel: '序号',
  stripe: true,
  filterBtn: false,
  editBtn: false,
  delBtn: false,
  addBtn: false,
  columnBtn: false,
  column: [
    {
      label: 'id',
      prop: 'jobLogId',
      hide: true
    },
    {
      label: '任务id',
      prop: 'jobId',
      hide: true
    },
    {
      label: '任务名称',
      prop: 'jobName'
    },
    {
      label: '任务组名',
      prop: 'jobGroup'
    },
    {
      label: '状态',
      prop: 'jobLogStatus',
      type: 'select',
      dicUrl: '/admin/dict/type/job_execute_status',
      dicMethod: 'get',
      slot: true,
    },
    {
      label: '组内顺序',
      prop: 'jobOrder',
      hide: true
    },
    {
      label: '类型',
      prop: 'jobType',
      type: 'select',
      dicUrl: '/admin/dict/type/job_type',
      dicMethod: 'get',
      width: 100,
    },
    {
      label: '执行路径',
      prop: 'executePath',
      overHidden: true
    },
    {
      label: '执行文件',
      prop: 'className',
      overHidden: true
    },
    {
      label: '执行方法',
      prop: 'methodName',
      overHidden: true,
      width: 120
    },
    {
      label: '执行参数值',
      prop: 'methodParamsValue',
      width: 100,
      overHidden: true
    },
    {
      label: 'cron表达式',
      prop: 'cronExpression',
      width: 100,
      overHidden: true
    },
    {
      label: '状态描述',
      prop: 'jobMessage'
    },
    {
      label: '执行时间(ms)',
      prop: 'executeTime',
      width: 120
    },
    {
      label: '异常信息',
      prop: 'exceptionInfo',
      overHidden: true
    },
    {
      label: '开始时间',
      prop: 'createTime',
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
      width: 160
    },
    {
      label: '租户',
      prop: 'tenantId',
      hide: true
    }
  ]
};
