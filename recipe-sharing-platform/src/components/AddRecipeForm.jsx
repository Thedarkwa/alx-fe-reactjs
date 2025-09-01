import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Example: Ensure at least 2 ingredients
    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least 2 ingredients (comma separated).");
      return;
    }

    setError(""); // clear error

    // For now, just log recipe (later can add to Zustand / JSON / backend)
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };
    console.log("New Recipe Submitted:", newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Add a New Recipe
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g. Jollof Rice"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
            placeholder="e.g. Rice, Tomatoes, Onions"
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="e.g. Boil rice, prepare stew, mix together"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
