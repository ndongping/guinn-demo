import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/auth";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ?? "微信公众号开发";
  if (to?.meta?.requiresAuth && !getToken()) {
    return {
      path: "/login",
      query: { redirect: to.fullPath, ...to.query },
    };
  }
    next();
});

export default router;
