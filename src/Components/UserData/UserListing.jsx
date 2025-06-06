import React, { useEffect, useState } from "react";
const UserListing = () => {
  const [userData, setUserdata] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return (
    <>
      <h1>Fetch api data</h1>
      {!loading ? (
        userData.map((item, index) => (
          <div key={index}>
            <h4>user name: {item.name}</h4>
            <h4>user age: {item.age}</h4>
            <h4>user email: {item.email}</h4>
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
