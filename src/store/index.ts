import { provide, inject, reactive } from 'vue';
import { Pokemon } from '../types';

interface State {
  team: Pokemon[];
}

const StoreSymbol = Symbol('store');

export const createStore = () => {
  const state = reactive<State>({
    team: [],
  });

  const addToTeam = (pokemon: Pokemon) => {
    state.team.push(pokemon);
  };

  const removeFromTeam = (id: string) => {
    state.team = state.team.filter(pokemon => pokemon.id !== id);
  };

  return {
    state,
    addToTeam,
    removeFromTeam,
  };
};

export const provideStore = () => {
  provide(StoreSymbol, createStore());
};

export const useStore = () => {
  const store = inject<State>(StoreSymbol);
  if (!store) {
    throw new Error('El contexto de la tienda no está disponible.');
  }
  return store;
};
