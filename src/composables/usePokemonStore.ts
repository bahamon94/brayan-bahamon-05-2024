// src/composables/usePokemonStore.ts
import { ref } from 'vue';
import { fetchPokemons } from '../services/PokemonService';
import { PaginationData, Pokemon, PokemonDetail } from '../types';

const MAX_POKEMONS = 151;
const PAGE_LIMIT = 25;

export const usePokemonStore = () => {
  const pokemons = ref<Pokemon[]>([]);
  const pagination = ref<PaginationData | null>(null);

  const getPokemons = async (filters: Record<string, string> = {}) => {
    const offset = parseInt(filters.offset || '0', 10);
    const limit = Math.min(PAGE_LIMIT, parseInt(filters.limit || `${PAGE_LIMIT}`, 10));

    if (offset >= MAX_POKEMONS) {
      console.error('Offset exceeds maximum number of Pokémon');
      return;
    }

    try {
      const response: PokemonDetail = await fetchPokemons({
        ...filters,
        offset: `${offset}`,
        limit: `${limit}`,
      });

      pokemons.value = response.results;
      pagination.value = {
        ...response.pagination,
        next: response.pagination.next && offset + limit < MAX_POKEMONS ? response.pagination.next : null,
        previous: response.pagination.previous,
      };
    } catch (error) {
      console.error('Error al obtener los pokémons:', error);
    }
  };

  getPokemons()

  return {
    pokemons,
    pagination,
    getPokemons,
  };
};
