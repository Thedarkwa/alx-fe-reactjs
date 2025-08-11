// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Store array of favorite recipe IDs
  favorites: [],

  // Store recommendations
  recommendations: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites // avoid duplicates
        : [...state.favorites, recipeId],
    })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate mock recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && // avoid already favorited ones
          Math.random() > 0.5 // simple placeholder logic
      );
      return { recommendations: recommended };
    }),

  // Setter for recipes (in case you need it)
  setRecipes: (recipes) => set({ recipes }),
}));

