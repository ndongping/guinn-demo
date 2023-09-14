<script setup>
import { RouterView } from 'vue-router';
import { useWxSDK } from "@/hooks/useWxSDK";
import useCommonStore from '@/store/modules/common';

const useUseDemoStore = useCommonStore();

function init() {
  const { isiOSWechat } = useWxSDK();
    if (isiOSWechat()) {
      const url = window.location.href.split("#")[0];
      useUseDemoStore.saveVisitUrl(url);
    }
}

init();
</script>

<template>
  <RouterView />
</template>

