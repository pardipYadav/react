import { Route, Routes, NavLink } from "react-router";
import UserListing from "./Components/UserData/UserListing";
import UserAdd from "./Components/UserData/UserAdd";
import EditUsers from "./Components/UserData/EditUsers";
import Login from "./Components/UserData/Login";

const App = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">add user</NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<UserListing />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<EditUsers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
