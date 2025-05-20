import { useState } from "react";

const App = () => {
  const [inputval, setInputval] = useState("");
  return (
    <div>
      <h1>Get input field value</h1>
      <input
        type="text"
        value={inputval}
        onChange={(event) => {
          setInputval(event.target.value);
        }}
        placeholder="enter your name"
      ></input>
      <h1>{inputval}</h1>

      <button
        onClick={() => {
          setInputval("");
        }}
      >
        clear value
      </button>
    </div>
  );
};

export default App;
