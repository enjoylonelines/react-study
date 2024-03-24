import { useEffect, useState } from "react";

export const useFetchNames = (pokemonIds) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      const loadedPokemons = [];

      for (let id = 1; id <= pokemonIds; id++) {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`
        ).then((res) => res.json());
        loadedPokemons.push(pokemon.names[2].name);
        setPokemons(loadedPokemons);
        setIsLoading(false);
      }
    };
    fetchNames();
  }, [pokemonIds]);

  return { pokemons, isLoading };
};
