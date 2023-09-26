<template>
  <view>
    <view class="navbar">12341</view>
    <view></view>
  </view>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

console.log(appStore.systemInfo)

</script>

<style lang="scss">
.navbar {
  position: fixed;
  background: pink;
  left: 0;
  width: 100vw;
  height: 84PX;
  z-index: 10;
}
</style>
