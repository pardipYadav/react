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
  console.log("userS", userS);
  return (
    <div>
      <h1>Loop in JSX </h1>
      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {userS.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
