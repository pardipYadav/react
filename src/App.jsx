import { useState } from "react";

const App = () => {
  const [inputval, setInputval] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
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
      <input
        type="text"
        value={pass}
        onChange={(event) => {
          setPass(event.target.value);
        }}
        placeholder="enter password"
      ></input>
      <input
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        placeholder="enter email"
      ></input>
      <button
        onClick={() => {
          setInputval("");
          setPass("");
          setEmail("");
        }}
      >
        clear value
      </button>
      <h1>{inputval}</h1>
      <h1>{pass}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default App;
