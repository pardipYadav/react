import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Multiple condition in react js</h1>
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        UpdateCount
      </button>

      {count == 0 ? (
        <h1>count:0</h1>
      ) : count == 1 ? (
        <h2>count: 1</h2>
      ) : count == 2 ? (
        <h2>count: 3</h2>
      ) : (
        <h1>other condition</h1>
      )}
    </div>
  );
};

export default App;
