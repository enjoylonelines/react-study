export interface Pokemon {
  id: number;
  name: string;
  img: string;
}
export interface PokemonApiRes {
  data: Pokemon;
  error: Object;
  isLoading: Object;
}

export interface PokemonProps {
  pokemons: Pokemon[];
  isLoading: boolean;
}
