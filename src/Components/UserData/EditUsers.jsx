import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUsers = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const { id } = useParams();
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setname(response.name);
    setage(response.age);
    setemail(response.email);
  };
  const updataUser = async () => {
    let response = await fetch(url, {
      method: "put",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response) {
      alert("edit user successfull its redirect after 3 second");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      alert("somthing went error");
    }
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>edit users</h2>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setname(e.target.value)}
          id=""
          placeholder="Enter name"
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          defaultValue={age}
          onChange={(e) => setname(e.target.age)}
          id=""
          placeholder="Enter age"
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          defaultValue={email}
          onChange={(e) => setname(e.target.email)}
          placeholder="Enter email"
        />
        <br />
        <br />
        <button onClick={updataUser}>update user</button>
      </div>
    </>
  );
};

export default EditUsers;
