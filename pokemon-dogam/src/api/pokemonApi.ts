import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Pokemon } from '../types/Pokemon'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/species/${name}`,
    }),
    getAllOfHangulName: builder.query<Pokemon, string>({
      query: (id) => `pokemon/species/${id}/names[2]`
    }),
  }),
})

export const { useGetPokemonByNameQuery, useGetAllOfHangulNameQuery } = pokemonApi