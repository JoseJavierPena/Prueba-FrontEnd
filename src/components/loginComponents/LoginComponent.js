// import React from "react";
// import Navbarr from "../Navbar";
// import App from "../../App";

// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";
// import { useAuth0 } from "@auth0/auth0-react";

// export default function LoginComponent() {
//   const { isAuthenticated, isloading } = useAuth0();

//   if (isloading) return <h1>Loading...</h1>;

//   return (
//     isAuthenticated && (
//       <div>
//         <Navbarr />
//         <App />
//         {isAuthenticated ? <LogoutButton /> : <LoginButton />}
//       </div>
//     )
//   );
// }
