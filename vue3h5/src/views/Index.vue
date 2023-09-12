<template>
  <div class="about">
    <h1 class="h1">This is an about page</h1>
    <Button @click="handleJump">hahaha</Button>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import { Button } from 'vant';
const router = useRouter();

function handleJump() {
        router.push({ path:  "/demo" });
}
</script>
<style lang="scss">
.h1 {
  color: $color-base;
}
</style>