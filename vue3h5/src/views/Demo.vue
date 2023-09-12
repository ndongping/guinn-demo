<template>
    <div class="about">
      <h1 class="h1">{{demoStore.count}}</h1>
    </div>
  </template>
  <script setup>
  import {getProduct} from "@/api/product";
import useDemoStore from '@/store/modules/demo';
const demoStore = useDemoStore();
  
  function getProductInfo() {
    // getProduct({ids: 315}).then(res => {
    //   console.log(res)
    // })
  }
  getProductInfo()
  </script>
  <style lang="scss">
  .h1 {
    color: $color-base;
  }
  </style>