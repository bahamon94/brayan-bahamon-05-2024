import HttpWrapper from '../api/HttpWrapper';
import { POKEMON_ENDPOINT } from '../utils/endpoints';

import { Pokemon, PokemonDetail, RawPokemonDetail } from '../types';
import { pokemonDetailAdapter } from './adapters/PokemonAdapter';

const httpWrapper = new HttpWrapper('https://pokeapi.co/api/v2');

interface PokemonResponse {
  results: Pokemon[];
}

const getPokemonIdFromUrl = (url: string): string => {
  const parts = url.split(POKEMON_ENDPOINT);   
  return parts[parts.length - 1];
};


export const fetchPokemons = async (): Promise<PokemonDetail[]> => {
  try {
    const response = await httpWrapper.get<PokemonResponse>('/pokemon?limit=25&offset=0');
    
    const pokemonDetails: PokemonDetail[] = await Promise.all(
      response.results.map(async (pokemon) => {
        const pokemonId = getPokemonIdFromUrl(pokemon.url); 
        const detailResponse = await httpWrapper.get<RawPokemonDetail>(`${POKEMON_ENDPOINT}${pokemonId}`);
        return pokemonDetailAdapter(detailResponse);
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error('Error al obtener los pokémons:', error);
    throw error;
  }
};
