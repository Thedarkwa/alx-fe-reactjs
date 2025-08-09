// src/App.jsx
import { useState } from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WelcomeMessage />

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
