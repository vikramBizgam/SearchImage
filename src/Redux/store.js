import { configureStore } from "@reduxjs/toolkit";
import PhotoSlice from "./Photos";
export default configureStore({
  reducer: {
    photos: PhotoSlice
  }
});