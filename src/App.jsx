import { useState } from "react";
const App = () => {
  const [name, setName] = useState("hello");
  const [fruit, setfruite] = useState("banana");
  const [count, setCount] = useState("1000");
  const updataName = () => {
    setName("world");
    setfruite("mango");
    setCount("500");
  };
  return (
    <div>
      <h1>State</h1>
      <h1>The name is: {name} </h1>
      <h1>Fruit: {fruit}</h1>
      <h1>Count: {count}</h1>
      <button onClick={updataName}>please update name</button>
    </div>
  );
};

export default App;
