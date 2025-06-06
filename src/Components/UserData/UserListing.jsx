import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const UserListing = () => {
  const [userData, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUserdata(response);
    setLoading(false);
  };
  const deleteUserData = async (id) => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    response = await response.json();
    if (response) {
      alert("data delete successfully");
      fetchUserData();
    }
  };

  const editUserData = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <>
      <h1>Fetch api data</h1>
      {!loading ? (
        userData.map((item, index) => (
          <div key={index}>
            <h4>user name: {item.name}</h4>
            <h4>user age: {item.age}</h4>
            <h4>user email: {item.email}</h4>
            <button onClick={() => deleteUserData(item.id)}>Delete</button>
            <button onClick={() => editUserData(item.id)}>edit</button>
            <hr />
          </div>
        ))
      ) : (
        <h1>Loading.......</h1>
      )}
    </>
  );
};

export default UserListing;
