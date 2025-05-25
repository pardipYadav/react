import { useRef } from "react";

const App = () => {
  const userRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const pass = document.querySelector("#pass").value;
    console.log("un-comp", user, pass);
  };
  const submitHandlerUseRef = (event) => {
    event.preventDefault();
    const current = userRef.current.value;
    console.log("submitHandlerUseRef", current);
  };

  return (
    <div>
      <h1>unctrolled component</h1>
      <form
        method=""
        action="
      "
        onSubmit={submitHandler}
      >
        <input className="" id="user" type="text" />
        <br />
        <input className="" id="pass" type="password" />
        <br />
        <button>submit</button>
      </form>
      {/* 
      <h3>below values get in uncontrolled component</h3>
      <span style={{ color: "red" }}>{user}</span>
      <span style={{ color: "red" }}>{pass}</span> */}

      <h1>Uncontrolled component by useRef</h1>
      <form action="" method="" onSubmit={submitHandlerUseRef}>
        <input ref={userRef} type="text" id="userRef" />
        <br></br>
        <input type="password" ref={userRef} id="passRef" />
        <br></br>

        <button> submit useRef</button>
      </form>
    </div>
  );
};

export default App;
