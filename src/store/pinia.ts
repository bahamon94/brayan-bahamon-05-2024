import { defineStore, PiniaPluginContext } from 'pinia';
import { Pokemon } from '../types';

interface State {
  team: Pokemon[];
}

export const useStore = defineStore({
  id: 'store',
  state: (): State => ({
    team: [],
  }),
  getters: {
    getTeam: (state) => state.team,
  },
  actions: {
    addToTeam(pokemon: Pokemon) {
      this.team.push(pokemon);
    },
    removeFromTeam(id: string) {
      this.team = this.team.filter((pokemon) => pokemon.id !== id);
    },
  },
});

export const createPiniaPlugin = () => {
  return ({ store }: PiniaPluginContext) => {
    const storedTeam = localStorage.getItem('team');
    if (storedTeam) {
      store.team = JSON.parse(storedTeam);
    }

    store.$onAction((mutation) => {
      if (mutation.type === 'addToTeam' || mutation.type === 'removeFromTeam') {
        localStorage.setItem('team', JSON.stringify(store.team));
      }
    });
  };
};
