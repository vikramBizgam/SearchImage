import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  allPhotos:[]
};

export const PhotoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    getAllPhotos : (state, action) => {
        state.allPhotos.push(...action.payload)
    },
    removeAllPhotos : (state) => {
        state.allPhotos = []
    },
  }
});

export const { getAllPhotos, removeAllPhotos } = PhotoSlice.actions;

export default PhotoSlice.reducer;