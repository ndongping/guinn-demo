<template>
  <view class="demo">
    <Navbar :isSpace="false" background="transparent" />
    <swiper class="swiper" :vertical="true">
      <swiper-item class="item" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index">
        <view v-if="index === 0">
          <swiper class="swiper">
            <swiper-item class="item" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index">
              <image mode="widthFix" :src="'https://picsum.photos/750/1640?random=' + index + 2" />
            </swiper-item>
          </swiper>
        </view>
        <view v-else>
          <image mode="widthFix" :src="'https://picsum.photos/750/1640?random=' + index" />
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import Navbar from '@/components/common/Navbar.vue';
import {useDidShow, useLoad} from '@tarojs/taro'
import './index.scss'

useDidShow(() => {
  console.log(1234123412)
})

useLoad(() => {
  console.log('================================')
})
</script>
