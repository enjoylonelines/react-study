import { useEffect, useState } from "react";
import { useGetSpeciesQuery } from "../redux/api/pokemonApi";

export const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const { data, error, isLoading } = useGetSpeciesQuery();

  useEffect(() => {
    if (data) {
      const promises = data.results.map((result) =>
        fetch(result.url).then((res) => res.json())
      );
      Promise.all(promises).then((names) => {
        const loadedPokemons = names.map((name, idx) => ({
          name: name.names[2].name,
          id: idx + 1,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            idx + 1
          }.png`,
        }));

        setPokemons(() => loadedPokemons);
      });
    }
  }, [data]);

  return { pokemons, error, isLoading };
};
