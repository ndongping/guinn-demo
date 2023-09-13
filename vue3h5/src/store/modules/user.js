import { getToken, setToken, removeToken } from "@/utils/auth";
import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    name: "",
  }),
  actions: {
    // 登录
    login(userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      const code = userInfo.code;
      const uuid = userInfo.uuid;
      return new Promise((resolve, reject) => {});
    },
    // 获取用户信息
    getInfo() {
      return new Promise((resolve, reject) => {});
    },
    // 退出系统
    logOut() {
      return new Promise((resolve, reject) => {
        logout(this.token)
          .then(() => {
            this.token = "";
            removeToken();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});

export default useUserStore;
