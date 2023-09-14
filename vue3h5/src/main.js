import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";
import "vant/lib/index.css";
import { setupRouter } from "./router";

const app = createApp(App);

setupRouter(app);
app.use(store);

app.mount("#app");
