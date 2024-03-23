import { useGetAllOfHangulNameQuery } from "../api/pokemonApi";

function Main({ setData }) {
  for (let i = 0; i < 100; i++) {
    const { data, error, isLoading } = useGetAllOfHangulNameQuery(`${i + 1}`);
  }
  console.log(query.data?.names?.[2]?.name);
  return (
    <div>
      {error && <p>there was an error</p>}
      {isLoading && <p>Loading...</p>}
      {data && (
        <div>
          {data}
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      )}
    </div>
  );
}

export default Main;
