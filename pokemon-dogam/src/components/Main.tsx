import { useSelector } from "react-redux";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { pokemonsState } from "../slices/pokemons";

function Main() {
  const { error, isLoading } = useFetchPokemons();
  const pokemons = useSelector(pokemonsState);
  console.log(pokemons);
  return (
    <div>
      {error && <div>oh no error</div>}
      {isLoading && <div>is Loading...</div>}
      {pokemons &&
        pokemons.map((pokemon) => {
          const { id, name, img } = pokemon;
          return (
            <div key={id}>
              <p>{name}</p> <img src={img} alt={name} />
            </div>
          );
        })}
    </div>
  );
}

export default Main;
