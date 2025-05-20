// const Login = (props) => {
//   return (
//     <div>
//       <h1>Login</h1>
//       <h3>Name: {props.name}</h3>
//       <h3>Name: {props.age}</h3>
//       <h3>Name: {props.email}</h3>
//     </div>
//   );
// };
const Login = ({ user }) => {
  return (
    <>
      <hr></hr>
      <h1>User Details</h1>
      <h3>Name: {user.name}</h3>
      <h3>Name: {user.age}</h3>
      <h3>Name: {user.email}</h3>
    </>
  );
};
export default Login;
