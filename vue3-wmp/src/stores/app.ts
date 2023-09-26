import { defineStore } from 'pinia';
import { getSystemInfoSync, getMenuButtonBoundingClientRect } from "@tarojs/taro";

const { statusBarHeight, windowWidth, windowHeight }  = getSystemInfoSync();
const menuButtonInfo = getMenuButtonBoundingClientRect();

export const useAppStore = defineStore('app', {
  state: () => ({
      /** 底部导航高度 */
      tabbarHeight: 100,
  }),
  getters: {
    /** 内容区域高度 */
    contentHeight() {
      return windowHeight - this.tabbarHeight - this.systemInfo.custonBarHeight;
    },
    /** 系统信息 */
    systemInfo() {
      if(!statusBarHeight || !windowWidth || !menuButtonInfo) return {};
      const custonBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height + statusBarHeight;
      const leftWidth = windowWidth - menuButtonInfo.left;
      const centerWidth = windowWidth - (windowWidth - menuButtonInfo.left) * 2;
      const padLeft = windowWidth - menuButtonInfo.left - menuButtonInfo.width;
      return {
        /** 头部导航高度 */
        custonBarHeight,
        statusBarHeight,
        leftWidth,
        centerWidth,
        padLeft,
        /** 屏幕宽度 */
        windowWidth,
        /** 屏幕高度 */
        windowHeight
      }
    }
  },
  actions: {
    setAppInfo(data) {
      this.screenHeight = data.screenHeight;
    }
  }
})
