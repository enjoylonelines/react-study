import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useGetAllOfHangulNameQuery } from "./api/pokemonApi";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      const query = useGetAllOfHangulNameQuery(`${i + 1}`);
      const name = query.data?.name;
      setPokemonData((prevName) => [name, ...prevName]);
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Main data={pokemonData} />
    </React.Fragment>
  );
}

export default App;
