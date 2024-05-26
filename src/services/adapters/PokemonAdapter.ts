import { PokemonDetail, RawPokemonDetail, IPokemonsRaw } from '../../types';
import { paginationAdapter } from "./PaginationAdapter";

export const pokemonDetailAdapter = (data: RawPokemonDetail): PokemonDetail => {
  const { pokemons, previous, next } = data;
  
  const results = pokemons.map((detail: IPokemonsRaw) => {
    const { 
      name, 
      sprites, 
      id,
      stats,
      types,
      cries,
      height,
      weight,
    } = detail;

    const image = sprites?.other?.dream_world?.front_default || '';

    return {
      id,
      name,
      image,
      stats,
      types,
      cries,
      height,
      weight,
    };
  });
    
  return {
    results,
    pagination: paginationAdapter({ next, previous }),
  };
};
