import Users from "./Users";
import CollegeDatas from "./CollegeData";
const App = () => {
  // const userS = [
  //   {
  //     id: 1,
  //     name: "pardeep",
  //     age: 28,
  //     email: "yadavpardeep23@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "simran",
  //     age: 22,
  //     email: "simran@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     name: "gunjan",
  //     age: 23,
  //     email: "gunjan@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     name: "preeti",
  //     age: 32,
  //     email: "preeti@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     name: "rahul",
  //     age: 31,
  //     email: "rahul@gmail.com",
  //   },
  // ];
  // console.log("userSuserS", userS);
  const collegeData = [
    {
      collegeName: "delhi college",
      collegeAddress: "delhi",
      website: "https://delhi.com",
      student: [
        {
          studentName: "pardeep delhi",
          rollnumber: "5482 delhi",
          email: "pardeep@gmail.com delhi",
        },
      ],
    },
    {
      collegeName: "chandigarh college",
      collegeAddress: "chandigarh",
      website: "https://chandigarh.com chandigarh",
      student: [
        {
          studentName: "pardeep chandigarh",
          rollnumber: "5482 chandigarh",
          email: "pardeep@gmail.com chandigarh",
        },
      ],
    },
    {
      collegeName: "punjab college ",
      collegeAddress: "punjab",
      website: "https://punjab.com",
      student: [
        {
          studentName: "pardee punjabp",
          rollnumber: "5482 punjab",
          email: "pardeep@punjab.com ",
        },
      ],
    },
    {
      collegeName: "mp college",
      collegeAddress: "mp",
      website: "https://mp.com",
      student: [
        {
          studentName: "pardee mpp",
          rollnumber: "5482 mp",
          email: "pardeep@mp.com",
        },
      ],
    },
    {
      collegeName: "pune college",
      collegeAddress: "pune",
      website: "https://pune.com",
      student: [
        {
          studentName: "pardeep pune",
          rollnumber: "548 pune2",
          email: "pardeep@pune.com",
        },
      ],
    },
    {
      collegeName: "haryana college",
      collegeAddress: "haryana",
      website: "https://haryana.com",
      student: [
        {
          studentName: "pardeeharyanap",
          rollnumber: "548 haryana2",
          email: "pardeep@haryana.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>nasted loop in component </h1>
      {collegeData.map((item, index) => (
        <CollegeDatas collegeD={item} />
      ))}
    </div>
  );
};

export default App;
