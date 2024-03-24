import { useEffect } from "react";
import { useGetAllOfHangulNameQuery } from "../api/pokemonApi";
import { useFetchPokemons } from "../hooks/useFetchNames";

function Main({ setData }) {
  const { data, isLoading } = useGetAllOfHangulNameQuery();
  console.log(data);
  //console.log(query.data?.names?.[2]?.name);
  return (
    <div>
      {isLoading && <div>is Loading...</div>}
      {/* {data &&
        data.map((pokemon) => <div key={pokemon}>{pokemon}</div>)} */}
    </div>
  );
}

export default Main;
