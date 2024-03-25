import { createSlice } from "@reduxjs/toolkit";

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons(state, { payload }) {
      //state.pokemons = payload;
    },
  },
});
export const pokemonsState = (state) => state.pokemons.pokemons;
export const pokemonsReducer = pokemonsSlice.reducer;
export const { setPokemons } = pokemonsSlice.actions;
