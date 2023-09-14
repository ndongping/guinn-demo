import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { createGuard } from "./guard";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (_to, _from, next) => {
  next();
});

export function setupRouter(app) {
  app.use(router);
  createGuard(router);
}

export default router;
