<template>
  <div class="layout">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item, index) in tabBar" :key="index" replace :to="'/' + item.path" :icon="item.icon">{{ item.name }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabBar: [
        {
          name: "广场首页",
          path: "index",
          icon: "home-o",
        },
        {
          name: "个人中心",
          path: "personal",
          icon: "contact",
        },
      ],
    };
  },
};
</script>
