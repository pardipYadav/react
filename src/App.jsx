import useToggle from "./ContextComponents/Hooks/useToggle";

const App = () => {
  const [value, toggleValue] = useToggle(true);
  return (
    <div>
      <button onClick={toggleValue}>toggle</button>
      <button onClick={() => toggleValue(false)}>hide toggle</button>
      <button onClick={() => toggleValue(true)}>show toggle</button>
      {value ? <h1>custom hook useToggle</h1> : null}
    </div>
  );
};

export default App;
