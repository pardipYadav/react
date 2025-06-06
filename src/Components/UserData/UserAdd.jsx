import { useState } from "react";

const UserAdd = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const addusers = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("user added");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <h1>Add users here</h1>
      <input
        type="text"
        onChange={(event) => setname(event.target.value)}
        placeholder="enter name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => setage(event.target.value)}
        placeholder="enter age"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) => setemail(event.target.value)}
        placeholder="enter email"
      />
      <br />
      <br />
      <button onClick={addusers}>Sumit</button>
      <button>Delete</button>
    </>
  );
};
export default UserAdd;
