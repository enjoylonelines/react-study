import { useSelector } from "react-redux";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { Link } from "react-router-dom";
import { pokemonsState } from "../redux/slices/pokemons";
import React from "react";
import PokemonItem from "../components/pokemonItem";

function Main() {
  const { pokemons, error, isLoading } = useFetchPokemons();

  return (
    <ul className="grid grid-cols-3 gap-24 relative ">
      {error && <div>oh no error</div>}
      {isLoading && <div>is Loading...</div>}
      {pokemons &&
        pokemons?.map((pokemon) => {
          // 컴포넌트로 넣으면 오류
          const { id, name, img } = pokemon;
          return (
            <li
              key={id}
              className="p-2 w-32 h-36 rounded-xl shadow-md shadow-black
        hover:bg-stone-700 flex flex-col items-center hover:shadow-white"
            >
              <Link to={id}>
                <img src={img} alt={name} />
                <p>{name}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default Main;
