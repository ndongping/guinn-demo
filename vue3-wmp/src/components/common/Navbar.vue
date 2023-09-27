<template>
  <view>
    <view class="navbar" :style="headerStyles">
      <view class="navbar-left" :style="{ width: `${systemInfo.leftWidth}PX` }">
        <template v-if="slotLeft">
          <slot name="left"></slot>
        </template>
        <view v-else @Tap="handleGoBack">back</view>
      </view>
      <view class="navbar-center">
        <template v-if="slotCenter">
          <slot name="center"></slot>
        </template>
        <view v-else class="title">{{ props.title }}</view>
      </view>
      <view class="navbar-right" :style="{ width: `${systemInfo.leftWidth}PX` }"></view>
    </view>
    <view v-if="props.isSpace" :style="{ height: `${systemInfo.custonBarHeight}PX` }"></view>
  </view>
</template>

<script setup lang="ts">

/**
 * title 标题
 * background 背景色
 * isSpace 是否占位
 * left 左侧插槽
 * center 中间插槽
 */
interface TabbarProps {
  title?: string,
  background?: string,
  isSpace?: boolean,
}
import { navigateBack } from '@tarojs/taro';
import { computed, useSlots } from 'vue';

import { useAppStore } from '@/stores/app';

const props = withDefaults(defineProps<TabbarProps>(), {
  background: '#FFF',
  isSpace: true,
  title: '',
})

const slotLeft = !!useSlots().left;
const slotCenter = !!useSlots().center;
const { systemInfo } = useAppStore();

const headerStyles = computed(() => {
  return {
    height: `${systemInfo.custonBarHeight}PX`,
    paddingTop: `${systemInfo.statusBarHeight}PX`,
    background: props.background
  }
})

const handleGoBack = () => {
  navigateBack();
}

</script>

<style lang="scss">
.navbar {
  position: fixed;
  background: #fff;
  left: 0;
  width: 100vw;
  height: 84PX;
  z-index: $zindex-navbar;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  .navbar-center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
