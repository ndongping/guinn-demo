const { defineConfig } = require("@vue/cli-service");

const port = process.env.port || process.env.npm_config_port || 80; // 端口

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    host: "0.0.0.0",
    port: port,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: ``,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
    client: {
      overlay: false,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '@/assets/styles/common.scss';`,
      },
    },
  },
});
