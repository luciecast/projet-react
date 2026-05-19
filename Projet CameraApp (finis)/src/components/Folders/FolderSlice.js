import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
  name: "folders",
  initialState: {
    folders: [
      { name: "Paysage" },
      { name: "Restaurant" },
      { name: "Important" }
    ]
  },
  reducers: {
    addFolder: (state, action) => {
      state.folders.push({ name: action.payload });
    },

    removeFolder: (state, action) => {
      const folderName = action.payload;
      state.folders = state.folders.filter(f => f.name !== folderName);
    }
  }
});

export const { addFolder, removeFolder } = folderSlice.actions;
export default folderSlice.reducer;
