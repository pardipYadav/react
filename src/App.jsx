import { useState } from "react";
import Counter from "./Counter";
const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>UseEffect Hook with props </h1>
      {display ? <Counter count={count} data={data} /> : null}

      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={() => setData(data + 1)}>data {data}</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
};

export default App;
