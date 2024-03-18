import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, type: undefined };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(prevState, {payload}) {
      return {
        ...prevState, 
        isOpen: true, 
        type: payload,
      };
    },
    closeModal(prevState) {
      return {...prevState, isOpen: false, type: undefined };
    },
  }
})

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;