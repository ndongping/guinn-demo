const routes = [
    {
      path: '/',
      name: 'index',
      redirect:'demo2',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/Demo.vue')
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('@/views/Demo2.vue')
    },
  ]
  
  export default routes;
  