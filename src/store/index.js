import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./slices/trainerName.slice.js";

export default configureStore({
  reducer: {
    trainerNameSlice,
  },
});
