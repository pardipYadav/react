const Users = ({ displayName, name, onClick }) => {
  return (
    <>
      <button onClick={() => displayName(name)}>click</button>
      <button onClick={() => onClick()}>Onclick</button>
    </>
  );
};

export default Users;
