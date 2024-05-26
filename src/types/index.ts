export interface Pokemon {
  id: string;
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: string;
  name: string;
  image: string;
  stats: Stat[];
  types: Type[];
  cries: Cries;
}

export interface Sprites {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface RawPokemonDetail {
  pokemonId: string;
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  cries: Cries;
}
