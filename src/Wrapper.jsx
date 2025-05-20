const Wrapper = ({ children, color = "green" }) => {
  return (
    <div
      style={{
        color: color,
        border: "2px solid green",
        width: "300px",
        height: "60px",
        margin: "10px",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
export default Wrapper;
