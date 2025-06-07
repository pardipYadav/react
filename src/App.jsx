import { Route, Routes, NavLink } from "react-router";
import UserListing from "./Components/UserData/UserListing";
import UserAdd from "./Components/UserData/UserAdd";
import EditUsers from "./Components/UserData/EditUsers";
import Login from "./Components/UserData/Login";
import LoginWithUseFormHook from "./Components/UserData/LoginWithUseFormHook";

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
          <li>
            <NavLink to="lognwithuseformhook">
              {" "}
              login with useFormAaction
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<UserListing />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<EditUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lognwithuseformhook" element={<LoginWithUseFormHook />} />
      </Routes>
    </>
  );
};

export default App;
