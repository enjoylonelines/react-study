import { useEffect, useState } from "react";
import { useGetPokemonsQuery } from "../redux/api/pokemonApi";

export const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const { data, error, isLoading } = useGetPokemonsQuery();

  useEffect(() => {
    if (data) {
      const loadedPokemons = data.results.map((pokemon, idx) => ({
        name: pokemon.name,
        id: idx + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          idx + 1
        }.png`,
      }));
      setPokemons(() => loadedPokemons);
    }
  }, [data]);

  return { pokemons, error, isLoading };
};
