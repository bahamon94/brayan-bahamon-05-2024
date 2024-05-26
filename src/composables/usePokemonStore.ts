import { ref } from 'vue';
import { fetchPokemons } from '../services/PokemonService'; 
import { Pokemon } from '../types';

export const usePokemonStore = () => {
  const pokemons = ref<Pokemon[]>([]);

  const getPokemons = async () => {
    try {
      const response = await fetchPokemons();
      pokemons.value = response;
    } catch (error) {
      console.error('Error al obtener los pokémons:', error);
    }
  };

  getPokemons();

  return {
    pokemons,
  };
};
