import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: [],
  reducers: {
    addRecipes: (state, action) => {
      state.push(action.payload);
    },
    removeRecipes(state, action) {
      state.splice(action.payload, 1);
    }
  },
});

//Ça sert à récupérer les actions générées automatiquement par Redux Toolkit
export const { addRecipes, removeRecipes } = recipeSlice.actions;

//Ça sert à lire les données dans le store Redux.
export const recipeSelector = (state) => state.recipes;
//selectore c'est pour acceder a la slice du state

//Ça sert à envoyer le reducer dans le store.
export default recipeSlice.reducer;
