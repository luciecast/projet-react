import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../src/component/RecipeSlice";


export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
