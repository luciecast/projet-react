import { createSlice } from "@reduxjs/toolkit";

// ce slice gere la liste des musiques favorites et leur notation
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.find(item => item.trackId === action.payload.trackId);
      if (!exists) state.push(action.payload);
    },

    rateTrack: (state, action) => {
      return state.map(item =>
        item.trackId === action.payload.id
          ? { ...item, rating: action.payload.rating }
          : item
      );
    }
  }
});

export const { addFavorite, rateTrack } = favoritesSlice.actions;
export default favoritesSlice.reducer;
