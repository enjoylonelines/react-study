import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(prevState) {
      return {...prevState, isOpen: !prevState.isOpen};
    },
  }
})

export const modalReducer = modalSlice.reducer;
export const { toggleModal } = modalSlice.actions;