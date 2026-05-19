import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [
      { id: 1, uri: require('../../../assets/foret.jpg'), folder: null },
      { id: 2, uri: require('../../../assets/route.jpg'), folder: null },
      { id: 3, uri: require('../../../assets/toureiffel.jpg'), folder: null },
    ]
  },
  reducers: {
    addPhoto: (state, action) => {
      state.photos.push(action.payload);
    },

    assignPhotoToFolder: (state, action) => {
      const { photoId, folderName } = action.payload;
      const photo = state.photos.find(p => p.id === photoId);
      if (photo) photo.folder = folderName;
    },

    removePhotoFromFolder: (state, action) => {
      const photo = state.photos.find(p => p.id === action.payload);
      if (photo) photo.folder = null;
    },

    // supprimer complètement une photo
    removePhoto: (state, action) => {
      state.photos = state.photos.filter(p => p.id !== action.payload);
    }
  }
});

export const { 
  addPhoto, 
  assignPhotoToFolder, 
  removePhotoFromFolder,
  removePhoto // 🔥 AJOUT
} = photosSlice.actions;

export default photosSlice.reducer;
