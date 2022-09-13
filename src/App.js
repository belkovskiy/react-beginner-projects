import React, { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={decrementCount}>- Минус</button>
        <button className="plus" onClick={incrementCount}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
