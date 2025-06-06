import { useState } from "react";
import "../../App.css";
const Login = () => {
  const [nameErr, setNameErr] = useState();
  const [passErr, setpassErr] = useState();

  const handleName = (event) => {
    if (event.target.value.length > 5) {
      setNameErr("Please enter a valid username. only 5 characters allowed");
    } else {
      setNameErr();
    }
  };
  const handlePass = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setpassErr();
    } else {
      setpassErr(
        "Please enter valid password. only number and characters allowed"
      );
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id=""
          className={nameErr ? "error-input" : ""}
          onChange={handleName}
          placeholder="username"
        />
        {nameErr && <span style={{ color: "red" }}>{nameErr}</span>}

        <br />
        <br />
        <input
          type="text"
          name=""
          className={passErr ? "error-input" : ""}
          onChange={handlePass}
          id=""
          placeholder="password"
        />
        {passErr && <span style={{ color: "red" }}>{passErr}</span>}
        <br />
        <br />
        <button disabled={nameErr || passErr}>Login</button>
      </div>
    </>
  );
};
export default Login;
