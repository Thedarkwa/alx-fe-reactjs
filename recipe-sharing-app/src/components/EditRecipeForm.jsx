import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setMessage('Title and description cannot be empty.');
      return;
    }
    updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });
    setMessage('Updated.');
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label><br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label><br />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Save</button>
      {message && <div style={{ marginTop: 6 }}>{message}</div>}
    </form>
  );
};

export default EditRecipeForm;
