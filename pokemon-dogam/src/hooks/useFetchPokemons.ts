import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetPokemonsQuery } from "../api/pokemonApi";
import { setPokemons } from "../slices/pokemons";

export const useFetchPokemons = () => {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    // ;;;
    if (data) {
      const loadedPokemons = data.results.map((pokemon, idx) => ({
        name: pokemon.name,
        id: idx + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          idx + 1
        }.png`,
      }));
      dispatch(setPokemons(loadedPokemons));
    }
  }, [data, dispatch]);

  return { error, isLoading };
};
