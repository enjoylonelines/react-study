import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  searchs: [],
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addProfile(prevState, { payload }) {
      prevState.profiles.push(payload);
    },
    delProfile() { },
    searchProfile(prevState, { payload }){
      const searchData = 
      prevState.profiles.filter(prof => prof.includes(payload));
      return {
        ...prevState,
        searchs: searchData,
      }
    }
  }
})

export const phoneBookReducer = phoneBookSlice.reducer;
export const { addProfile, delProfile, searchProfile } = phoneBookSlice.actions;