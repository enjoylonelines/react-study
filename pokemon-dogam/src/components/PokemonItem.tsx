import { useEffect } from "react";

function PokemonItem({ pokemon }) {
  const { name, id, img } = pokemon;

  return (
    <li
      key={id}
      className="p-2 w-32 h-36 rounded-xl shadow-md shadow-black hover:bg-stone-700 flex flex-col items-center"
    >
      <img src={img} alt={name} />
      <p>{name}</p>
    </li>
  );
}

export default PokemonItem;
