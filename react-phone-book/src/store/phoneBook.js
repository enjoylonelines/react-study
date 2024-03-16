import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addProfile(prevState, { newProfile }) {
      prevState.push(newProfile);
    },
    delProfile() { },

  }
})

export const phoneBookReducer = phoneBookSlice.reducer;