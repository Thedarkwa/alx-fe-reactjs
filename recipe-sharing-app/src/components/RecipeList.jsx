// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, addFavorite, favorites } = useRecipeStore((state) => ({
    recipes: state.recipes,
    addFavorite: state.addFavorite,
    favorites: state.favorites,
  }));

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button
            onClick={() => addFavorite(recipe.id)}
            disabled={favorites.includes(recipe.id)}
          >
            {favorites.includes(recipe.id) ? 'Favorited' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
