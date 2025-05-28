const ChildA = ({ setMessage }) => {
  return (
    <>
      <div>
        <h1>chile one</h1>
        <input
          type="text"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="enter user"
        />
      </div>
      <hr></hr>
    </>
  );
};
export default ChildA;
