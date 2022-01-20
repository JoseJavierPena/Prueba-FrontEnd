import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import List from "./components/List";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isloading } = useAuth0();

  if (isloading) return <h1>Loading...</h1>;

  console.log(isAuthenticated);
  return (
    <div className="App">
      <h1>Prueba Front-End</h1>
      <List></List>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
}

export default App;
