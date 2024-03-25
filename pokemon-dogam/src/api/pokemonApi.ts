import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, LIMIT_NUM } from "../constants/constants";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => `pokemon?limit=${LIMIT_NUM}`,
    }),
  }),
});

export const pokemonApiReducer = pokemonApi.reducer;
export const { useGetPokemonsQuery } = pokemonApi;
