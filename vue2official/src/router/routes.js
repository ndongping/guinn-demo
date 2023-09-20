const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/Index.vue"),
        meta: { title: "首页" },
      },
      {
        path: "/personal",
        name: "personal",
        component: () => import("@/views/Personal.vue"),
        meta: { title: "个人中心" },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: { title: "登录" },
  },
];

export default routes;
