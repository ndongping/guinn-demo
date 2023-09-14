<template>
  <div class="about">
    <div>{{ useUseDemoStore.visitUrl }}</div>
    <div>{{ demoStore.count }}</div>
    <Button @click="handleJump">hahaha</Button>
    <Button @click="handleAddCount">add</Button>
  </div>
</template>
<script setup>
console.log(import.meta.env.VITE_APP_BASE_API)
import { useRouter } from "vue-router";
import { Button } from 'vant';
import useDemoStore from '@/store/modules/demo';
import useCommonStore from '@/store/modules/common';

const useUseDemoStore = useCommonStore();
const router = useRouter();

const demoStore = useDemoStore();

function handleJump() {
  router.push({ path: "/demo" });
}
function handleAddCount() {
  demoStore.setCount(demoStore.count + 1);
}
</script>
<style lang="scss">
.h1 {
  color: $color-base;
}
</style>