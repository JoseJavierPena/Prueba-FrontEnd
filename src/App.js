import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

import Profile from "./components/Profile";

import Navbarr from "./components/Navbar";
import List from "./components/List";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import Create from "./components/Create";
import Maintenance from "./pages/Maintenance";
import Operation from "./pages/Operation";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";

function App() {
  // const { isAuthenticated, isloading } = useAuth0();

  // if (isloading) return <h1>Loading...</h1>;
  // {isAuthenticated ? <LogoutButton /> : <LoginButton />}

  // console.log(isAuthenticated);

  return (
    <BrowserRouter>
      <Navbarr />
      <Profile />
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/Maintenance" element={<Maintenance />}></Route>
        <Route path="/Operation" element={<Operation />}></Route>
        <Route path="/Report" element={<Report />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
