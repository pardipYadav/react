const ChildB = ({ messase }) => {
  return (
    <>
      <div>
        <h3>
          this is child two for show the sibling child state{" "}
          <span style={{ color: "red" }}>{messase}</span>
        </h3>
      </div>{" "}
    </>
  );
};

export default ChildB;
