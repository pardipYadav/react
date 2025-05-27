import { useTransition } from "react";
import { useState } from "react";

const App = () => {
  // const [pending, setPending] = useState(false);
  const [pending, startTransition] = useTransition();
  const handleButton = async () => {
    // setPending(true);
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 3000));
    });
    // setPending(false);
  };
  return (
    <div>
      <h1>useTransition hook</h1>
      {pending ? (
        <img
          style={{ width: "100px" }}
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
          alt=""
        />
      ) : null}
      <button disabled={pending} onClick={handleButton}>
        clicks
      </button>
    </div>
  );
};

export default App;
