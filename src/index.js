import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { domain, client_id } from "./config";

// const domain = "dev-y-wp2t2k.us.auth0.com";
// const client_id = "SOEUQHHc6HVWdQyzgWEDjIhSMcbkY3lt";

// console.log(
//   process.env.REACT_APP_AUTH0_DOMAIN,
//   process.env.REACT_APP_AUTH0_CLIENT_ID
// );

console.log(domain, client_id);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={client_id}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
