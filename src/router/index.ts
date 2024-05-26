import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useStore } from '../store/pinia';
import PokemonDetail from '../views/TeamView/detail/_id.vue';

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
    name: 'PokemonDetail',
    component: PokemonDetail,
    beforeEnter: (to, from, next) => {
      const pokemonId = parseInt(to.params.id);
      
      const store = useStore();
      
      if (store.getTeam.length === 0) {
        router.push('/');
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
