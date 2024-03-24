import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import type { Pokemon, PokemonName } from "../types/Pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllOfHangulName: builder.query({
      query: () => `pokemon?limit=50`,
    }),
  }),
});

export const { useGetAllOfHangulNameQuery } = pokemonApi;
