import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState([
    "pardeep",
    "rahul",
    "deepak",
    "param",
  ]);
  const [details, setDetails] = useState([
    { name: "pardeep", age: "27" },
    { name: "rahule", age: "30" },
    { name: "param", age: "53" },
  ]);
  const handleName = (name) => {
    userName[userName.length - 1] = name;
    setUserName([...userName]);
  };

  const handleAge = (age) => {
    details[details.length - 1].age = age;
    setDetails([...details]);
  };
  return (
    <div>
      <h1>update array state (normal array )</h1>
      <input
        type="text"
        onChange={(e) => handleName(e.target.value)}
        placeholder="enter name"
      />
      {userName.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <hr />

      <h3>updating array last object age </h3>
      <input
        type="text"
        onChange={(e) => handleAge(e.target.value)}
        placeholder="enter age"
      />
      {details.map((item, index) => (
        <h4 key={index}>
          {item.name},{item.age}
        </h4>
      ))}
    </div>
  );
};

export default App;
