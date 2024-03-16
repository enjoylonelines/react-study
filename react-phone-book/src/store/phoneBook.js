import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  searchs: [],
  isSearch: false,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addProfile(prevState, { payload }) {
      prevState.profiles.push(payload);
    },
    delProfile(prevState, { payload }) {
      const newProfiles = prevState.profiles.filter(prof => prof.id !== payload);
      return {
        ...prevState,
        profiles: newProfiles,
      }
    },
    searchProfile(prevState, { payload }) {
      const searchData =
        prevState.profiles.filter(prof => prof.name.includes(payload));
      return {
        ...prevState,
        searchs: searchData,
      }
    },
    checkSearchState(prevState, { payload }) {
      if (payload.trim() === '') return { ...prevState, isSearch: false };
      else return { ...prevState, isSearch: true };
    }
  }
})

export const phoneBookReducer = phoneBookSlice.reducer;
export const {
  addProfile,
  delProfile,
  searchProfile,
  checkSearchState } = phoneBookSlice.actions;