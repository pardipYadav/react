import { Route, Routes, NavLink } from "react-router";
import UserListing from "./Components/UserData/UserListing";
import UserAdd from "./Components/UserData/UserAdd";
import EditUsers from "./Components/UserData/EditUsers";

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
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<UserListing />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>
    </>
  );
};

export default App;
