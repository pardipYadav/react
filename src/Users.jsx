const Users = ({ data }) => {
  return (
    <div
      style={{
        border: "2px solid grey",
        width: "400px",
        margin: "20px",
        padding: "20px",
      }}
    >
      <h3>
        id:<span style={{ color: "green" }}>{data.id}</span>
      </h3>
      <h3>
        name:<span style={{ color: "green" }}>{data.name}</span>
      </h3>
      <h3>
        age:<span style={{ color: "green" }}>{data.age}</span>
      </h3>
      <h3>
        email: <span style={{ color: "green" }}>{data.email}</span>
      </h3>
    </div>
  );
};
export default Users;
