import { getToken, setToken, removeToken } from "@/utils/auth";
import { defineStore } from "pinia";

const userStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    name: "",
    /** 登录前访问页面 */
    landPageRoute: '',
  }),
  actions: {
    setLandPage(route) {
      this.landPageRoute = route
    },
    // 登录
    login(userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      const code = userInfo.code;
      const uuid = userInfo.uuid;
      return new Promise((resolve, reject) => {});
    },
    setToken(token) { },
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

export default userStore;
