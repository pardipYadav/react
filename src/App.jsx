import { useState } from "react";
const App = () => {
  const [radioval, setRadioVal] = useState("male");
  const [city, setCity] = useState("chandigarh");

  return (
    <div>
      <h1>Radio or dropdown value </h1>
      <h2>You seleted : {radioval}</h2>
      <input
        type="radio"
        onChange={(event) => {
          setRadioVal(event.target.value);
        }}
        value={"male"}
        name="genders"
        checked={radioval === "male"}
        id="male"
      />
      <label htmlFor="male">male</label>
      <input
        type="radio"
        onChange={(event) => {
          setRadioVal(event.target.value);
        }}
        value={"female"}
        name="genders"
        checked={radioval === "female"}
        id="female"
      />
      <label htmlFor="female">female</label>
      {/* <Skills /> */}
      <br></br>
      <br></br>
      <span>
        You selected the <b>{city}</b> location
      </span>
      <h3>Please select location</h3>
      <select
        onChange={(event) => {
          setCity(event.target.value);
        }}
        defaultValue={"chandigarh"}
      >
        <option value={"delhi"}>delhi</option>
        <option value={"noida"}>noida</option>
        <option value={"gurugram"}>gurugram</option>
        <option value={"chandigarh"}>chandigarh</option>
      </select>
    </div>
  );
};

export default App;
