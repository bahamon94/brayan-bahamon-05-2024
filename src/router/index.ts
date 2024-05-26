import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView/index.vue')
  },
  // Otras rutas aquí...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
