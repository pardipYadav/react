import Login from "./UserLogin";
import Student from "./Student";
import { useState } from "react";
const App = () => {
  const userObject = {
    name: "pawan kumar",
    age: 36,
    email: "pawankumar@gmail.com",
  };
  const userObject1 = {
    name: "pawan kumars",
    age: 362,
    email: "pawankumar@gmail.coms",
  };
  const userObject2 = {
    name: "pawan kumarsssss",
    age: 362222,
    email: "pawankumar@gmail.coms2222",
  };
  const collageArry = ["delhi college", "chandigarh colleg", "patna college"];
  const [student, setStudent] = useState("rohan");
  return (
    <div>
      <h1>Props in react js</h1>
      {student && <Student stuName={student} />}
      <button
        onClick={() => {
          setStudent("hello world");
        }}
      >
        update student name
      </button>
      <Login user={userObject} />
      <Login user={userObject1} />
      <Login user={userObject2} />
    </div>
  );
};

export default App;
