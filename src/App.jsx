import { useRef } from "react";

const App = () => {
  const inputRef = useRef();
  const inputrefhandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <div>
      <h1>useRef Hook</h1>
      <input
        type="text"
        ref={inputRef}
        placeholder="enter something"
        id="usereff"
      />
      <button onClick={() => inputrefhandler()}>submitsss</button>
    </div>
  );
};

export default App;
