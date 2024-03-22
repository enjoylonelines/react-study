export interface Pokemon {
  id: number,
  name: string;
}

export interface PokemonApiRes {
  data: Pokemon;
  error: Object;
  isLoading: Object;
}