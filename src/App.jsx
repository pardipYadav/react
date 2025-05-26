import Users from "./Users";

const App = () => {
  const displayName = (name) => {
    alert(name);
  };
  const onClick = () => {
    alert("this is function not event");
  };
  return (
    <div>
      <h1>pass function component in parent component</h1>
      <Users displayName={displayName} name="lakhan" onClick={onClick} />
      <br></br>
      <Users displayName={displayName} name="ram" onClick={onClick} />
      <br></br>
      <Users displayName={displayName} name="rohan" onClick={onClick} />
      <br></br>
      <Users displayName={displayName} name="vinay" onClick={onClick} />
    </div>
  );
};

export default App;
