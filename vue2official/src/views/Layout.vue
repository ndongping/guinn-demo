<template>
  <div class="layout">
    <router-view />
    <div class="tabbar">
      <div class="item" v-for="(item, index) in tabBar" :key="index" @click="handleTab(index)">
        <div :class="['icon', active === index ? 'active' : '']">
          <img :src="item.icon" />
        </div>
        <span class="txt">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
const home = require("../assets/icons/home.png");
const personal = require("../assets/icons/personal.png")
export default {
  data() {
    return {
      active: 0,
      tabBar: [
        {
          name: "广场首页",
          path: "index",
          icon: home,
        },
        {
          name: "个人中心",
          path: "personal",
          icon: personal,
        },
      ],
    };
  },
  watch: {
    $route: {
      handler(val) {
        if (val) {
          this.active = this.tabBar.findIndex(item => item.path === val.name);
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleTab(index) {
      this.$router.push({
        path: `/${this.tabBar[index].path}`
      })
      this.active = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.tabbar {
  height: 82px;
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f7f7f7;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.08), 0 -3px 6px -4px rgba(0, 0, 0, 0.12), 0 -9px 28px 8px rgba(0, 0, 0, 0.05);

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 18px;

    .icon {
      width: 22px;
      position: relative;
      margin-bottom: 4px;

      &.active {
        &::after {
          content: '';
          width: 16px;
          height: 16px;
          background: $color-green;
          position: absolute;
          right: -4px;
          bottom: 2px;
          opacity: .8;
          border-radius: 50%;
        }
      }
    }

    .txt {
      font-size: 12px;
    }
  }
}</style>
