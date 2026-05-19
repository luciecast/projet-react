import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../src/components/Photos/PhotoSlice";
import foldersReducer from "../src/components/Folders/FolderSlice";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    folders: foldersReducer
  }
});
