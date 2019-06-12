<template>
  <div/>
</template>

<script>
import request from '@/router/axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Authredirect',
  computed: {
    ...mapGetters(['tagWel'])
  },
  created() {
    const params = this.$route.query
    let code = params.code
    const url = window.location.href
    // 登录请求
    if (url.indexOf('LOGIN') > 0) {
      // QQ 微信强大 可以解析
      if (url.indexOf('WX') > 0 || url.indexOf('QQ') > 0) {
        const state = params.state.split('-')[0]
        const code = params.code
        window.opener.location.href = `${window.location.origin}/#/login?state=${state}&code=${code}&time=` + new Date().getTime()
      } else if (url.indexOf('OSC') > 0) {
        const start = url.indexOf('=') + 1
        const end = url.indexOf('&state')
        code = url.substring(start, end)
        window.opener.location.href = `${window.location.origin}/#/login?state=OSC&code=${code}&time=` + new Date().getTime()
      } else if (url.indexOf('GITEE') > 0) {
        const start = url.indexOf('=') + 1
        const end = url.indexOf('&state')
        code = url.substring(start, end)
        window.opener.location.href = `${window.location.origin}/#/login?state=GITEE&code=${code}&time=` + new Date().getTime()
      }
      window.close()
    } else {
      if (url.indexOf('WX') > 0 || url.indexOf('QQ') > 0) {
        const state = params.state.split('-')[0]
        const code = params.code
        request({
          url: '/admin/social/bind',
          method: 'post',
          params: { state, code }
        }).then(() => {
          this.$alert('社交账号绑定成功', '成功', {
            confirmButtonText: '确定',
            callback: () => {
              window.close()
            }
          })
        })
      } else if (url.indexOf('OSC') > 0) {
        const state = 'OSC'
        this.bind(state, url)
      } else if (url.indexOf('GITEE') > 0) {
        const state = 'GITEE'
        this.bind(state, url)
      }
    }
  },
  methods: {
    bind: function(state, url) {
      const start = url.indexOf('=') + 1
      const end = url.indexOf('#')
      const code = url.substring(start, end)
      request({
        url: '/admin/social/bind',
        method: 'post',
        params: { state, code }
      }).then(() => {
        this.$alert('社交账号绑定成功', '成功', {
          confirmButtonText: '确定',
          callback: () => {
            window.close()
          }
        })
      })
    }
  }
}
</script>

<style>
</style>
