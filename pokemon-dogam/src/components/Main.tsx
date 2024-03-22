import { useGetPokemonByNameQuery } from "../api/pokemonApi";
import { Pokemon, PokemonApiRes } from "../types/Pokemon";

function Main({ data }: Pokemon[]) {
  return (
    <div>
      {/* {error && <p>there was an error</p>}
      {isLoading && <p>Loading...</p>}
      {data && ( */}
      <div>
        {data}
        {/* <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} /> */}
      </div>
    </div>
  );
}

export default Main;
