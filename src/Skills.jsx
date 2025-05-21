import { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const handleSKills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <div>
      <h1>Select Your skills</h1>
      <input type="checkbox" onChange={handleSKills} value="php" id="php" />
      <label htmlFor="php">php</label>
      <br></br>
      <input type="checkbox" onChange={handleSKills} value="wp" id="wp" />
      <label htmlFor="wp">wordpress</label>
      <br></br>
      <input
        type="checkbox"
        onChange={handleSKills}
        value="nodejs"
        id="nodejs"
      />
      <label htmlFor="nodejs">nodejs</label>
      <br></br>
      <input type="checkbox" onChange={handleSKills} value="HTML" id="HTML" />
      <label htmlFor="HTML">HTML</label>
      <br></br>
      <input
        type="checkbox"
        onChange={handleSKills}
        value="Next js"
        id="Next js"
      />
      <label htmlFor="Next js">Next js</label>
      <br></br>
      <input
        type="checkbox"
        onChange={handleSKills}
        value="phython"
        id="phython"
      />
      <label htmlFor="phython">phython</label>
      <h3>{skills.toString()}</h3>
    </div>
  );
};
export default Skills;
