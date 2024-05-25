import { provide, inject, reactive } from 'vue';
import { Pokemon } from '../types';

// Definir el tipo de estado
interface State {
  team: Pokemon[];
}

// Crear el contexto
const StoreSymbol = Symbol('store');

export const createStore = () => {
  const state = reactive<State>({
    team: [],
  });

  // Métodos para modificar el estado
  const addToTeam = (pokemon: Pokemon) => {
    state.team.push(pokemon);
  };

  const removeFromTeam = (id: string) => {
    state.team = state.team.filter(pokemon => pokemon.id !== id);
  };

  // Devolver el estado y los métodos
  return {
    state,
    addToTeam,
    removeFromTeam,
  };
};

// Proveedor de contexto
export const provideStore = () => {
  provide(StoreSymbol, createStore());
};

// Gancho personalizado para acceder al contexto
export const useStore = () => {
  const store = inject<State>(StoreSymbol);
  if (!store) {
    throw new Error('El contexto de la tienda no está disponible.');
  }
  return store;
};
