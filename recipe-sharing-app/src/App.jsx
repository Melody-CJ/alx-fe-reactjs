import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Recipe Sharing App</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
      <AddRecipeForm />
      <RecipeList />
      </>
      }
      />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </div>
);
}

export default App
