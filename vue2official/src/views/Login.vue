<template>
  <div class="login">
    <img src="@/assets/images/login.jpg" alt="">
    <div class="btn-view">
      <van-button class="btn" block type="primary" @click="handleLogin('mcn')">MCN 登录</van-button>
      <van-button class="btn" block type="default"  @click="handleLogin('daren')">达人 登录</van-button>
    </div>
  </div>
</template>

<script>
import { getProduct, getPop } from "@/api/product";
import { jump2Auth, getUserInfo } from '@/utils/useWechatAuth'
import { getAuthUrlApi, wechatAuthApi } from "@/api/wechat";
export default {
  data() {
    return {

    }
  },
  created() {
    // getProduct({ids: 315}).then(res => {
    //   console.log(res)
    // })
    // this.init()
  },
  methods: {
    handleLogin(url) {
      const path = url === 'mcn' ? '/login-mcn' : '/login-daren'
      this.$store.commit('user/SET_TOKEN', 'qerqwer')
      this.$router.push({ path })
    },
    init() {
      let code = this.$route.query.code
      // 3.如果有code，则已经授权
      if (code) {
        const redirect = this.$store.state.user.landPageRoute || '/'
        // 测试
        // this.$router.replace({path: redirect })
        wechatAuthApi(code).then((res) => {
          // 记录token
          this.$store.dispatch('user/setStateToken', res.access_token);
          // 跳转到授权前访问的页面
          this.$router.replace({ path: redirect })
        })
      } else {
        // 1.记录上一个页面的地址
        const redirect = this.$route.query.redirect
        if (redirect) {
          this.$store.commit('user/SET_LANDPAGEROUTE', redirect)
        }
        // 2.跳转授权
        const callbackUrl = window.location.origin + window.location.pathname
        jump2Auth(callbackUrl)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  min-height: 100vh;
  background: #f5f7f5;
  .btn-view {
    padding: 18px 48px;
    .btn {
      margin-bottom: 27px;
    }
  }
}
</style>
