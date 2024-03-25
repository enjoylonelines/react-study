import { useSelector } from "react-redux";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { pokemonsState } from "../slices/pokemons";
import PokemonItem from "./pokemonItem";

function Main() {
  const { error, isLoading } = useFetchPokemons();
  const pokemons = useSelector(pokemonsState);

  return (
    <ul className="grid grid-cols-3 gap-24 ">
      {error && <div>oh no error</div>}
      {isLoading && <div>is Loading...</div>}
      {pokemons &&
        pokemons.map((pokemon) => {
          const { name, id, img } = pokemon;

          return (
            // item 컴포넌트에 들어가면 오류
            <li
              key={id}
              className="p-2 w-32 h-36 rounded-xl shadow-md shadow-black
               hover:bg-stone-700 flex flex-col items-center hover:shadow-white"
            >
              <img src={img} alt={name} />
              <p>{name}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Main;
