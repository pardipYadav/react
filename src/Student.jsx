const Students = ({ student }) => {
  return (
    <div>
      <h3>Students</h3>
      <ul>
        <li>{student.studentName}</li>
        <li>{student.rollnumber}</li>
        <li>{student.email}</li>
      </ul>
    </div>
  );
};
export default Students;
