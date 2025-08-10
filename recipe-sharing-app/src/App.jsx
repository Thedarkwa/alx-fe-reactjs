// src/App.jsx
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
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

        {/* React Router setup */}
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
