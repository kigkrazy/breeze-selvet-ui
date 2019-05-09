<template>
  <vue-terminal style="width:50%;height:1000px;margin:0 auto"
                :task-list="taskList"
                :command-list="commandList"
                title="redis-cli"
                :greeting="greeting"
                :prompt="prompt"
                :showHelpMessage="showHelpMessage"
                :unknownCommandMessage="unknownCommandMessage"
                :showInitialCd="showInitialCd"
  />
</template>

<script>
  import VueTerminal from 'vue-terminal';
  import {fetchExec} from '@/api/monitor/monitor'

  export default {
    name: "terminal",
    components: {VueTerminal},
    data: function () {
      return {
        greeting: '欢迎使用pigx redis-cli',
        prompt: 'pigx-redis:6379>',
        showInitialCd: false,
        showHelpMessage: false,
        unknownCommandMessage: {
          type: 'error',
          label: 'Error',
          message: '不支持该命令，输出help 查看支持列表'
        },
        taskList: {
          get: {
            description: 'Get the value of a key | get key',
            get(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          hget: {
            description: 'Get the value of a hash field | hget key field',
            hget(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          hgetall: {
            description: 'Get all the fields and values in a hash | hgetall key',
            hgetall(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          lrange: {
            description: 'Get a range of elements from a list | lrange key start end',
            lrange(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          llen: {
            description: 'Get the length of a list | llen key',
            llen(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          scan: {
            description: 'Incrementally iterate the keys space | scan index ',
            ttl(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          ttl: {
            description: 'Get the time to live for a key | ttl key',
            ttl(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          dbsize: {
            description: 'Return the number of keys in the selected database',
            dbsize(pushToList, input) {
              const p = new Promise(resolve => {
                fetchExec(Object.assign({
                  command: input,
                })).then((response) => {
                  resolve({type: response.data.msg, label: response.data.msg, message: response.data.data})
                })
              })
              return p
            }
          },
          defaultTask: {
            description: '默认任务，系统内置',
            defaultTask() {
              const p = new Promise(resolve => {
                resolve({type: 'success', label: 'Success', message: '详细使用请输入 help'})
              })
              return p
            }
          }
        },
        commandList: {
          desc: {
            description: '命令行特别说明',
            messages: [
              {message: 'web 端目前只开发查询类功能，避免安全问题，更多信息联系DBA操作'}
            ]
          }
        }
      }
    },
    methods: {
      exec: function (input) {
        fetchList(Object.assign({
          command: input,
        }))
      }
    }
  }
</script>
