export interface Pokemon {
  id: number;
  name: string;
  image: string;
  stats: Stat[];
  types: Type[];
  cries: Cries;
}

export interface PokemonDetail {
  results: Pokemon[];
  pagination: PaginationData;
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

export interface IPokemonsRaw {
  id: number;
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  cries: Cries;
}
export interface RawPokemonDetail {
  next: string,
  previous: string,
  pokemons: IPokemonsRaw[]
}

export interface PaginationParams {
  offset: string | null;
  limit: string | null;
}

export interface PaginationData {
  next: PaginationParams | null;
  previous: PaginationParams | null;
}
