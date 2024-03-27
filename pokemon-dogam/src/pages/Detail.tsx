import { useParams } from "react-router-dom";
import { useFetchInfo } from "../hooks/useFetchInfo";
import React from "react";
import PokemonItem from "../components/pokemonItem";
import { useFetchPokemons } from "../hooks/useFetchPokemons";

function Detail() {
  const { id } = useParams();
  const { detailInfo, error, isLoading } = useFetchInfo(Number(id));
  const { weight, height, types } = detailInfo;
  const pokemons = useFetchPokemons();
  const { name, img } = pokemons[Number(id) - 1];

  return (
    <>
      {error && <p>oh no error</p>}
      {isLoading && <p>is Loading...</p>}
      {detailInfo && (
        <ul>
          <li
            className="p-2 w-32 h-36 rounded-xl shadow-md shadow-black
  hover:bg-stone-700 flex flex-col items-center hover:shadow-white"
          >
            <img src={img} alt={name} />
            <p>{name}</p>
          </li>
          <li>몸무게: {weight}</li>
          <li>키: {height}</li>
          {types.map((type) => (
            <li key={type} className="inline ml-4  ">
              {type}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Detail;
