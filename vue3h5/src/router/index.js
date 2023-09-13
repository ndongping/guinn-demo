import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_API),
  routes: routes,
});

router.beforeEach(async (_to, _from, next) => {
  next();
});

export default router;
