<template>
  <div class="about">
    <div>{{ demoStore.count }}</div>
    <Button @click="handleJump">hahaha</Button>
    <Button @click="handleAddCount">add</Button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { Button } from 'vant';
import useDemoStore from '@/store/modules/demo';
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