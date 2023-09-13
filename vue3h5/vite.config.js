import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// 当前工作目录路径
const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 环境变量
  const env = loadEnv(mode, root, "");
  console.log("运行环境", env.VITE_APP_ENV);

  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/main.scss";',
        },
      },
    },
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        "/dev-api": {
          target: "https://apiuat.sisley.com.cn",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, ""),
        },
      },
    },
  };
});
