import { Route, Routes, NavLink } from "react-router";
import UserListing from "./Components/UserData/UserListing";
import UserAdd from "./Components/UserData/UserAdd";

const App = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <NavLink to="add">add user</NavLink>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<UserListing />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </>
  );
};

export default App;
