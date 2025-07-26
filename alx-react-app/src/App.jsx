import { useState } from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage'; // 👈 Import the component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WelcomeMessage /> {/* 👈 Use the component */}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
