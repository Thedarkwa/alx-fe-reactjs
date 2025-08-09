import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // delete by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // update an existing recipe (expects full recipe object with id)
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  // set recipes (initialization)
  setRecipes: (recipes) => set({ recipes }),
}));
