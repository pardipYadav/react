import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  const length = users.length;
  const lUser = users[users.length - 1];
  const unique = [...new Set(users)].length;
  return (
    <div>
      <h1>Drived method</h1>
      <h3>total users: {length}</h3>
      <h3>last users: {lUser} </h3>
      <h3>Unique users: {unique}</h3>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Add user"
      />
      <button onClick={handleSubmit}>Submit</button>
      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
};

export default App;
