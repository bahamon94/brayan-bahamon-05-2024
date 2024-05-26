import { PokemonDetail, RawPokemonDetail } from '../../types';

export const pokemonDetailAdapter = (data: RawPokemonDetail): PokemonDetail => {
  const { 
    name, 
    sprites, 
    pokemonId,
    stats,
    types,
    cries,
  } = data;

  const image = sprites?.other?.dream_world?.front_default || '';

  return {
    id: pokemonId,
    name,
    image,
    stats,
    types,
    cries,
  };
};