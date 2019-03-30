<template>
  <div>
    <wechat :data="data"
            @submit="submit"></wechat>
  </div>
</template>

<script>
  import wechat from "@/components/wechat/"
  import {addObj, getObj, putObj} from '@/api/mp/wxmenu'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      wechat
    },
    data() {
      return {
        data: {
          button: []
        }
      };
    },
    created() {
      this.getAccountMenu()
    },
    computed: {
      ...mapGetters(['permissions'])
    },
    methods: {
      submit(form) {
        if (this.permissions.mp_wxmenu_add) {
          addObj('wxeb4543e2d692ec5a', form).then(data => {
            this.$message.success("保存成功")
          })
        } else {
          this.$message.error("权限不足，不能保存");
        }
      },
      getAccountMenu() {
        getObj('wxeb4543e2d692ec5a').then(response => {
          if (response.data.data) {
            this.data = JSON.parse(response.data.data)
          } else {
            this.data.button = []
          }
        })
      }
    }
  };
</script>

<style>
</style>
