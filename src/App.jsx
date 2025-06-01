import { useState } from "react";
import Collage from "./ContextComponents/Collage";
import { subjectContext } from "./ContextData";
const App = () => {
  const [sub, setSub] = useState("");
  const handleContext = (value) => {
    setSub(value);
  };
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <h1>Context Api</h1>
      <select
        value={sub}
        onChange={(event) => handleContext(event.target.value)}
      >
        <option value="">Select option</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
        <option value="Geography">Geography</option>
      </select>
      <button onClick={() => setSub("")}>Clear subject</button>
      <subjectContext.Provider value={sub}>
        <Collage />
      </subjectContext.Provider>
    </div>
  );
};

export default App;
