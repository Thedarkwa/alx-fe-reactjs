HEAD
import { useState } from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage'; // <-- Import at top

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WelcomeMessage />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
5364607e202c49a2c10f02c4e4e5e49a5cadc356
    </div>
  );
}

export default App;

 HEAD
 5364607e202c49a2c10f02c4e4e5e49a5cadc356
