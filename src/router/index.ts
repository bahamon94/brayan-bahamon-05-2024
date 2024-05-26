import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView/index.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/TeamView/index.vue')
  },
  {
    path: '/team/:id',
    name: 'PokemonDetails',
    component: () => import(/* webpackChunkName: "pokemon-details" */ '../views/TeamView/detail/_id.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
