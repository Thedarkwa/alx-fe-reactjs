import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((r) => (
        <div key={r.id} style={{ border: '1px solid #ddd', padding: 8, margin: 6 }}>
          <Link to={`/recipes/${r.id}`}><h3>{r.title}</h3></Link>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
