<template>
  <div class="about">
    <h1 class="h1">登录</h1>
  </div>
</template>
<script setup>
import { jump2Auth, getUserInfo } from '@/hooks/useWechatAuth'
import userStore from '@/store/modules/user'
import { redirectTo, getRouteQuery } from '@/hooks/usePage'

const useUserStore = userStore();

function init() {
  let code = getRouteQuery().code
  // 3.如果有code，则已经授权
  if (code) {
    const redirect = useUserStore.landPageRoute || '/'
    // 测试
    redirectTo(redirect)
    getUserInfo(code).then((res) => {
      // 记录token
      useUserStore.setToken(res.access_token)
      // 跳转到授权前访问的页面
      redirectTo(redirect)
    })
  } else {
    // 1.记录上一个页面的地址
    const { redirect } = getRouteQuery()
    if (redirect) {
      useUserStore.setLandPage(redirect)
    }
    // 2.跳转授权
    const callbackUrl = window.location.origin + window.location.pathname
    jump2Auth(callbackUrl)
  }
}

init()

</script>
<style lang="scss">
.h1 {
  color: $color-base;
  font-size: 40px;
  padding: 80px;
  text-align: center;
}
</style>