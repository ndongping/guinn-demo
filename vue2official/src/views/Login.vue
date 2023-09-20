<template>
  <div class="login">
    <h1>This is an login page</h1>
  </div>
</template>

<script>

import { getProduct, getPop } from "@/api/product";
export default {
  data() {
    return {

    }
  },
  created() {
    // getProduct({ids: 315}).then(res => {
    //   console.log(res)
    // })
  }
}

</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  min-height: 100vh;
  background: #f8f8f8;
}
</style>
