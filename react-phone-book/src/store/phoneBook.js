import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  searchs: [],
  isSearch: false,
  selectedProfile: undefined,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addProfile(prevState, { payload }) {
      const newProfile = payload;
      return {
        ...prevState,
        profiles: [...prevState.profiles, newProfile],
      }
    },
    delProfile(prevState, { payload }) {
      const newProfiles = prevState.profiles.filter(prof => prof.id !== payload);
      prevState.profiles.push(newProfiles);
      // lodesh? 몰라요..
    },
    searchProfile(prevState, { payload }) {
      const searchData = prevState.profiles.filter(prof => prof.name.includes(payload));
      
      return {
        ...prevState,
        searchs: searchData,
      }
    },
    checkSearchState(prevState, { payload }) {
      if (payload.trim() === '') return { ...prevState, isSearch: false };
      else return { ...prevState, isSearch: true };
    },
    selectProfile(prevState, { payload }) { // filter >> find
      const selectedProfile = prevState.profiles.find(prof => prof.id === payload);
      return {
        ...prevState,
        selectedProfile: selectedProfile,
      }
    },
  }
})

export const phoneBookReducer = phoneBookSlice.reducer;
export const {
  addProfile,
  delProfile,
  searchProfile,
  checkSearchState,
  selectProfile, } = phoneBookSlice.actions;