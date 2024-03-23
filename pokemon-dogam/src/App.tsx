import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  return (
    <React.Fragment>
      <Header />
      <Main setData={setPokemonData} />
    </React.Fragment>
  );
}

export default App;
