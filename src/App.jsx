import { useState } from "react";
import Login from "./UserLogin";
const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h1>Toggle in react js</h1>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        change userName
      </button>
      {toggle ? <Login /> : null}
    </div>
  );
};

export default App;
