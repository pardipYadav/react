import Users from "./Users";

const App = () => {
  const userS = [
    {
      id: 1,
      name: "pardeep",
      age: 28,
      email: "yadavpardeep23@gmail.com",
    },
    {
      id: 2,
      name: "simran",
      age: 22,
      email: "simran@gmail.com",
    },
    {
      id: 3,
      name: "gunjan",
      age: 23,
      email: "gunjan@gmail.com",
    },
    {
      id: 4,
      name: "preeti",
      age: 32,
      email: "preeti@gmail.com",
    },
    {
      id: 5,
      name: "rahul",
      age: 31,
      email: "rahul@gmail.com",
    },
  ];
  console.log("userSuserS", userS);
  return (
    <div>
      <h1>Reuse component in loop </h1>
      {userS.map((item) => (
        <Users data={item} />
      ))}
    </div>
  );
};

export default App;
