import useUserStore from "@/store/modules/user";
export function createGuard(router) {
  router.beforeEach(async (to) => {
    document.title = to.meta.title ?? "微信公众号开发";
    if (to.meta.requiresAuth && !useUserStore().token) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        path: "/login",
        // save the location we were at to come back later
        query: { redirect: to.fullPath, ...to.query },
      };
    }
  });
}
