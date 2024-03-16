import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook";
import { modalReducer } from "./modal";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    modal: modalReducer,
  }
});