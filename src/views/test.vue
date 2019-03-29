<template>
  <div>
    <wechat :data="data"
            @submit="submit"></wechat>
  </div>
</template>

<script>
import wechat from "@/components/wechat/";
export default {
  components: {
    wechat
  },
  data() {
    return {
      data: {
        button: [
          {
            type: "click",
            name: "歌手简介",
            key: "V1001_TODAY_SINGER",
            url: "",
            sub_button: []
          },
          {
            name: "菜单",
            sub_button: [
              {
                type: "view",
                name: "搜索",
                key: "",
                url: "http://www.soso.com/",
                sub_button: []
              },
              {
                type: "view",
                name: "视频",
                key: "",
                url: "http://v.qq.com/",
                sub_button: []
              },
              {
                type: "click",
                name: "赞一下我们",
                key: "V1001_GOOD",
                url: "",
                sub_button: []
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    submit(form) {
      this.$message(JSON.stringify(form));
    }
  }
};
</script>

<style>
</style>
