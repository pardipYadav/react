import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const hook = () => {
    console.log("hello world");
  };

  // useEffect(() => {
  //   hook();
  // }); // call every time
  // useEffect(() => {
  //   hook();
  // }, []); // call only once

  useEffect(() => {
    hook();
  }, [count]); // call on changing single state (dependcy)

  return (
    <div>
      <h1>UseEffect Hook </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click for increase{count}
      </button>
    </div>
  );
};

export default App;
