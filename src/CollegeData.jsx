import Students from "./Student";

const CollegeData = ({ collegeD }) => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        borderBottom: "2px solid #000",
        margin: "20px",
        borderRadius: "10px",
      }}
      key={collegeD.index}
    >
      <h2>College Name: {collegeD.collegeName}</h2>
      <ul>
        <li>
          <h2>CollegeAddres: {collegeD.collegeAddress}</h2>
        </li>
        <li>
          <h2>Website: {collegeD.website}</h2>
        </li>
        <li>
          {collegeD.student.map((student, index) => (
            <Students student={student} />
          ))}
        </li>
      </ul>
    </div>
  );
};
export default CollegeData;
