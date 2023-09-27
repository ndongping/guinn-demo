<template>
  <web-view :src="url"></web-view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLoad } from '@tarojs/taro'
const url = ref('')

useLoad((option) => {
  if(option.url) url.value = decodeURIComponent(option.url)
})

</script>
