import { useId } from "react";

const App = () => {
  const name = useId();
  const username = useId();
  const password = useId();

  return (
    <div>
      <h1>useId Hook</h1>
      <form action="">
        <label htmlFor={name}>name</label>
        <input type="text" name="" id={name} />
        <br />
        <br />
        <label htmlFor={username}>username</label>
        <input type="text" id={username} />
        <br />
        <br />
        <label htmlFor={password}>password</label>
        <input type="text" id={password} />
      </form>
    </div>
  );
};

export default App;
