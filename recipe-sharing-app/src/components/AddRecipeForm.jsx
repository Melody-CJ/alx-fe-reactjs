import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Recipe Title"
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <textarea
        value={description}
        placeholder="Recipe Description"
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
