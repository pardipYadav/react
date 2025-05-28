import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "pardeep",
    address: {
      city: "chandigarh",
      country: "India",
    },
  });
  const submitNameHandler = (value) => {
    data.name = value;
    setData({ ...data });
  };

  const submitCityHandler = (city) => {
    data.address.city = city;
    setData({ ...data, address: { ...data.address, city } });
  };
  return (
    <div>
      <h1>object updating method</h1>
      <input
        type="text"
        onChange={(event) => submitNameHandler(event.target.value)}
        placeholder="enter name"
      />
      <hr />
      <input
        type="text"
        onChange={(event) => {
          submitCityHandler(event.target.value);
        }}
        placeholder="enter city"
        name=""
        id=""
      />
      <h3>name: {data.name}</h3>
      <h3>city: {data.address.city}</h3>
      <h3>Country: {data.address.country}</h3>
    </div>
  );
};

export default App;
