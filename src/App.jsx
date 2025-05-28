import ChildA from "./childA";
import ChildB from "./ChildB";
import { useState } from "react";
const App = () => {
  const [messase, setMessage] = useState("");
  return (
    <div>
      <h1>lifting state up method</h1>
      <ChildA setMessage={setMessage} />
      <ChildB messase={messase} />
    </div>
  );
};

export default App;
