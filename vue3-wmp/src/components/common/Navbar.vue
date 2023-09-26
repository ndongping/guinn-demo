<template>
  <view>
    <view class="navbar" :style="headerStyles">
      <view class="navbar-left" :style="{ width: `${systemInfo.leftWidth}PX` }">
        <view @Tap="handleGoBack">back</view>
      </view>
      <view class="navbar-center">
        <slot></slot>
      </view>
      <view class="navbar-right" :style="{ width: `${systemInfo.leftWidth}PX` }"></view>
    </view>
    <view v-if="props.isSpace" :style="{ height: `${systemInfo.custonBarHeight}PX` }"></view>
  </view>
</template>

<script setup lang="ts">

/**
 * background 背景色
 * isSpace 是否占位
 */
interface TabbarProps {
  background?: string,
  isSpace?: boolean,
}
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import { navigateBack } from '@tarojs/taro';

const props = withDefaults(defineProps<TabbarProps>(), {
  background: '#FFF',
  isSpace: true,
})

const { systemInfo } = useAppStore();


const headerStyles = computed(() => {
  return {
    height: `${systemInfo.custonBarHeight}PX`,
    paddingTop: `${systemInfo.statusBarHeight}PX`,
    background: props?.background || '#fff'
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
  z-index: 10;
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
