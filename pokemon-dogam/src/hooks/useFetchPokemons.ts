import { useEffect, useState } from "react";
import { BASE_URL, LIMIT_NUM } from "../constants/constants";

export const useFetchPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   const fetchPokemons = async () => {
    setIsLoading(true);
    const url = `${BASE_URL}/pokemon?limit=${LIMIT_NUM}`;
    const res = 
   }
  }, [])
  
};
