import { PokemonDetail, RawPokemonDetail } from '../../types';

export const pokemonDetailAdapter = (data: RawPokemonDetail): PokemonDetail => {
  const { name, sprites : { other } } = data;
  return {
    name,
    image: other.dream_world.front_default,
  };
};