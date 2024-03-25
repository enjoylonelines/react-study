import { useDispatch } from "react-redux";
import { useGetPokemonsQuery } from "../api/pokemonApi";
import { setPokemons } from "../slices/pokemons";

export const useFetchPokemons = () => {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    const loadedPokemons = await data?.results.map((pokemon, idx) => ({
      name: pokemon.name,
      id: idx + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        idx + 1
      }.png`,
    }));
    dispatch(setPokemons(loadedPokemons));
  };

  fetchPokemons();

  return { error, isLoading };
};
