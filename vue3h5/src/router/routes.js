const routes = [
    {
      path: '/',
      name: 'index',
      redirect:'demo2',
      component: () => import('@/views/Index.vue'),
      meta: { requiresAuth: false, title: "home" },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: { requiresAuth: false, title: "登录" },
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/Demo.vue'),
      meta: { requiresAuth: false, title: "demo" },
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('@/views/Demo2.vue'),
      meta: { requiresAuth: false, title: "demo2" },
    },
  ]
  
  export default routes;
  