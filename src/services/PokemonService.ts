import HttpWrapper from '../api/HttpWrapper';
import { POKEMON_ENDPOINT } from '../utils/endpoints';

import { Pokemon, PokemonDetail, RawPokemonDetail } from '../types';
import { pokemonDetailAdapter } from './adapters/PokemonAdapter';

const httpWrapper = new HttpWrapper('https://pokeapi.co/api/v2');

interface IPokemonResponseAll {
  next: string,
  previous: string
  results: { name: string, url: string }[];
}

const getPokemonIdFromUrl = (url: string): string => {
  const parts = url.split(POKEMON_ENDPOINT);   
  return parts[parts.length - 1];
};


export const fetchPokemons = async (filters: Record<string, string> = {}): Promise<PokemonDetail> => {
  const params = new URLSearchParams(filters).toString();
  const endpoint = `${POKEMON_ENDPOINT}?${params}`
  
  try {
    const response = await httpWrapper.get<IPokemonResponseAll>(endpoint);
    const pokemonDetailsRaw: RawPokemonDetail[] = await Promise.all(
      response.results.map(async (pokemon) => {
        const pokemonId: string = getPokemonIdFromUrl(pokemon.url); 
        return await httpWrapper.get<RawPokemonDetail>(`${POKEMON_ENDPOINT}${pokemonId}`);
      })
    );   

    const { next, previous } = response;

    return pokemonDetailAdapter({ pokemons: pokemonDetailsRaw, next, previous });

  } catch (error) {
    console.error('Error al obtener los pokémons:', error);
    throw error;
  }
};

