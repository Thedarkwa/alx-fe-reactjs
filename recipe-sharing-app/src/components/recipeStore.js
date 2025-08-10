// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
  },

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updated = state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updated = state.recipes.filter(recipe => recipe.id !== id);
      return { recipes: updated, filteredRecipes: updated };
    });
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes })
}));

