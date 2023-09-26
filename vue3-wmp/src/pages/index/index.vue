<template>
  <view class="index">
    <Navbar />
    test
    test
    test
    test
    test
    test
    test
    test
    test
    <button @Tap="handleJump">跳转</button>
  </view>
</template>

<script setup lang="ts">
import './index.scss'
import Navbar from '@/components/common/Navbar.vue';
import { navigateTo } from '@tarojs/taro';

function  add() {
  console.log(12341234)
}
add()

function handleJump() {
  navigateTo({
    url: '/pages/demo/index',
  })
}

</script>
