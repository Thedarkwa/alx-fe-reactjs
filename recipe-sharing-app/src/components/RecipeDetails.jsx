import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => String(r.id) === id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Edit</h3>
      <EditRecipeForm recipe={recipe} />

      <h3>Danger Zone</h3>
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
