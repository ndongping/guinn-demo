<template>
  <view class="index">
    <Navbar background="pink">
      <template #center>
        <h1>Here might be a page title</h1>
      </template>
    </Navbar>
    <button @Tap="handleJump">跳转</button>
  </view>
</template>

<script setup lang="ts">
import './index.scss'
import Navbar from '@/components/common/Navbar.vue';
import { navigateTo } from '@tarojs/taro';

const handleJump = () => {
  navigateTo({
    url: '/pages/demo/index',
  })
}

</script>
