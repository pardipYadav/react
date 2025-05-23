import { useEffect } from "react";

const Counter = ({ count, data }) => {
  useEffect(() => {
    console.log("mounting mount phase only");
  }, []);

  useEffect(() => {
    console.log("update mount phase only");
  }, [count]);

  useEffect(() => {
    return () => console.log("unmounting phasesss");
  }, []);

  return (
    <div>
      <h1>Counter component {count}</h1>
      <h1>data component {data}</h1>;
    </div>
  );
};
export default Counter;
