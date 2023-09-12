<template>
    <div class="about">
      <h1 class="h1">This is an about page</h1>
      <Button>hahaha</Button>
    </div>
  </template>
  <script setup>
  import {getProduct} from "@/api/product";
  import { Button } from 'vant';
  
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