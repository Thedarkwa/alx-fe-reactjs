import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div style={{ padding: '20px' }}>
    <h1>Recipe Sharing App</h1>
    <AddRecipeForm />
    <RecipeList />
  </div>
);
}