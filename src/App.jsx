import { useRef } from "react";
import Users from "./Users";

const App = () => {
  const inputRef = useRef(null);
  const inputRefAction = () => {
    inputRef.current.value = "200";
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };
  return (
    <div>
      <h1>Forword Ref</h1>
      <Users ref={inputRef} />
      <button onClick={inputRefAction}>inputRef</button>
    </div>
  );
};

export default App;
