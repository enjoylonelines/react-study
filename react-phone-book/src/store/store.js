import { configureStore } from "@reduxjs/toolkit";
import { phoneBookReducer } from "./phoneBook";

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  }
});