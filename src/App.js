import "./App.css";

//import Profile from "./components/Profile";

// import LoginButton from "./components/loginComponents/LoginButton";
// import LogoutButton from "./components/loginComponents/LogoutButton";
// import { useAuth0 } from "@auth0/auth0-react";

import Navbarr from "./components/Navbar";

// import LoginComponent from "./components/loginComponents/LoginComponent";
//import List from "./components/List";

import { Route, BrowserRouter, Routes } from "react-router-dom";

// import CreateButton from "./components/CreateButton";
// import EditButton from "./components/EditButton";
// import DeleteButton from "./components/DeleteButton";
import CreateDepartment from "./components/createComponents/CreateDepartment";
import EditDepartment from "./components/editComponents/EditDepartment";
import DeleteDepartment from "./components/deleteComponents/DeleteDepartment";

import CreateStudies from "./components/createComponents/CreateStudies";
import EditStudies from "./components/editComponents/EditStudies";
import DeleteStudies from "./components/deleteComponents/DeleteStudies";

import CreateEmployees from "./components/createComponents/CreateEmployees";
import EditEmployees from "./components/editComponents/EditEmployees";
import DeleteEmployees from "./components/deleteComponents/DeleteEmployees";

import Departments from "./pages/Departments";
import Employees from "./pages/Employees";
import Studies from "./pages/Studies";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  // const { isAuthenticated, isloading } = useAuth0();

  // if (isloading) return <h1>Loading...</h1>;
  // isAuthenticated ? <LogoutButton /> : <LoginButton />;

  // console.log(isAuthenticated);

  return (
    <div className="container p-1">
      <BrowserRouter>
        <Navbarr />
        {/* <Profile /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/departments" element={<Departments />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/studies" element={<Studies />}></Route>

          <Route
            path="/createDepartment"
            element={<CreateDepartment />}
          ></Route>
          <Route path="/editDepartment" element={<EditDepartment />}></Route>
          <Route
            path="/deleteDepartment"
            element={<DeleteDepartment />}
          ></Route>

          <Route path="/createEmployees" element={<CreateEmployees />}></Route>
          <Route path="/editEmployees" element={<EditEmployees />}></Route>
          <Route path="/deleteEmployees" element={<DeleteEmployees />}></Route>

          <Route path="/createStudies" element={<CreateStudies />}></Route>
          <Route path="/editStudies" element={<EditStudies />}></Route>
          <Route path="/deleteStudies" element={<DeleteStudies />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
