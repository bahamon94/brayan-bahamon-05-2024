export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  image: string;
}

export interface RawPokemonDetail {
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
