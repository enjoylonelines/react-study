import React from "react";

function PokemonItem({ pokemon }) {
  const { id, img, name } = pokemon;
  return (
    <li
      className="p-2 w-32 h-36 rounded-xl shadow-md shadow-black
  hover:bg-stone-700 flex flex-col items-center hover:shadow-white"
    >
      <img src={img} alt={name} />
      <p>{name}</p>
    </li>
  );
}

export default PokemonItem;
