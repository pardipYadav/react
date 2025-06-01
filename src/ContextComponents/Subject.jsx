import { useContext } from "react";
import { subjectContext } from "./../ContextData";
export default function Subject() {
  const subject = useContext(subjectContext);
  return (
    <div style={{ backgroundColor: "red", padding: "10px" }}>
      <h1>Subject :{subject} </h1>
    </div>
  );
}
