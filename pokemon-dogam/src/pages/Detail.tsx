import { useParams } from "react-router-dom";
import { useFetchInfo } from "../hooks/useFetchInfo";
import React, { useEffect, useState } from "react";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { Pokemon } from "../types/Pokemon";
import TypeBox from "../components/TypeBox";

function Detail() {
  const { id } = useParams();
  const { detailInfo, error, isLoading } = useFetchInfo(Number(id));
  const { pokemons } = useFetchPokemons();
  const pokemon: Pokemon = pokemons[Number(id) - 1];
  const { weight, height, types } = detailInfo || {};

  return (
    <>
      {error && <p>Oh no, there was an error.</p>}
      {isLoading && <p>Loading...</p>}
      <ul className="flex flex-col items-center">
        <li className="p-2 mb-4 w-32 h-36 rounded-xl shadow-md shadow-black hover:bg-stone-700 flex flex-col items-center hover:shadow-white">
          <img src={pokemon?.img} alt={pokemon?.name} />
          <p>{pokemon?.name}</p>
        </li>
        <li className="mb-4">몸무게: {weight}</li>
        <li className="mb-4">키: {height}</li>
        <div>
          {types?.map((type, idx) => (
            <TypeBox key={idx} idx={idx} type={type} />
          ))}
        </div>
      </ul>
    </>
  );
}

export default Detail;
