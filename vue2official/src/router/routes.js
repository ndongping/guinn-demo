import Layout from "@/views/Layout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/Index.vue"),
        meta: { title: "任务广场" },
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
  {
    path: "/login-mcn",
    name: "login-mcn",
    component: () => import("@/views/LoginMcn.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/login-daren",
    name: "login-daren",
    component: () => import("@/views/LoginDaRen.vue"),
    meta: { title: "登录" },
  },
  {
    path: "/task-detail",
    name: "task-detail",
    component: () => import("@/views/TaskDetail.vue"),
    meta: { title: "任务详情" },
  },
  {
    path: "/agency",
    name: "agency",
    component: () => import("@/views/Agency.vue"),
    meta: { title: "机构中心" },
  },
];

export default routes;
