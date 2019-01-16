<template>
  <div class="avue-contail"
       :class="{'avue--collapse':isCollapse}">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top/>
    </div>

    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar/>
      </div>
      <div class="avue-main">
        <!-- 顶部标签卡 -->
        <tags/>
        <!-- 主体视图层 -->
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view class="avue-view"
                         v-if="$route.meta.$keepAlive"/>
          </keep-alive>
          <router-view class="avue-view"
                       v-if="!$route.meta.$keepAlive"/>
        </el-scrollbar>

      </div>
    </div>
    <div class="avue-shade"
         @click="showCollapse"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import tags from './tags'
  import top from './top/'
  import sidebar from './sidebar/'
  import admin from '@/util/admin';
  import {validatenull} from '@/util/validate';
  import {calcDate} from '@/util/date.js';
  import {getStore} from '@/util/store.js';
  import SockJS from 'sockjs-client';
  import Stomp from 'stompjs';
  import store from "@/store";
  export default {
    components: {
      top,
      tags,
      sidebar
    },
    name: 'index',
    data() {
      return {
        //刷新token锁
        refreshLock: false,
        //刷新token的时间
        refreshTime: '',
      }
    },
    created() {
      //实时检测刷新token
      this.refreshToken()
    },
    destroyed() {
      console.log("销毁")
      console.log(this.refreshTime)
      clearInterval(this.refreshTime)
      this.disconnect()
    },
    mounted() {
      this.init()
      this.initWebSocket()
    },
    computed: mapGetters(['isLock', 'isCollapse', 'website', 'expires_in']),
    props: [],
    methods: {
      showCollapse() {
        this.$store.commit("SET_COLLAPSE")
      },
      // 屏幕检测
      init() {
        this.$store.commit('SET_SCREEN', admin.getScreen())
        window.onresize = () => {
          setTimeout(() => {
            this.$store.commit('SET_SCREEN', admin.getScreen())
          }, 0);
        }
      },
      // 实时检测刷新token
      refreshToken() {
        this.refreshTime = setInterval(() => {
          const token = getStore({
            name: 'access_token',
            debug: true,
          });

          if (validatenull(token)) {
            return;
          }

          if (this.expires_in <= 1000 && !this.refreshLock) {
            this.refreshLock = true
            this.$store
              .dispatch('RefreshToken')
              .catch(() => {
                clearInterval(this.refreshTime)
              });
            this.refreshLock = false
          }
          this.$store.commit("SET_EXPIRES_IN", this.expires_in - 10);
        }, 10000);
      },
      initWebSocket() {
        this.connection();
        let self = this;
        //断开重连机制,尝试发送消息,捕获异常发生时重连
        this.timer = setInterval(() => {
          try {
            self.stompClient.send("test");
          } catch (err) {
            console.log("断线了: " + err);
            self.connection();
          }
        }, 5000);
      },
      connection() {
        let token =  store.getters.access_token
        const TENANT_ID = getStore({name: 'tenantId'})
        // 建立连接对象
        this.socket = new SockJS('http://localhost:9999/auth/ws');//连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息
        // 获取STOMP子协议的客户端对象
        this.stompClient = Stomp.over(this.socket);
        var headers = {
          'Authorization':'Bearer '+token
        };
        // 向服务器发起websocket连接
        this.stompClient.connect(headers, (frame) => {
          this.stompClient.subscribe('/user/' + TENANT_ID + '/loginToAll', (msg) => { // 订阅服务端提供的某个topic
            console.log(msg.body); // msg.body存放的是服务端发送给我们的信息
            //alert("用户"+msg.body+"登陆");
            this.$notify({
              title: "用户登陆通知",
              dangerouslyUseHTMLString: true,
              message: '用户 <strong>' + msg.body + '</strong> 登陆',
              offset: 60
            });
          });
        }, (err) => {

        });
      },
      disconnect() {
        if (this.stompClient != null) {
          this.stompClient.disconnect();
          console.log("Disconnected");
        }
      }
    }
  }
</script>
