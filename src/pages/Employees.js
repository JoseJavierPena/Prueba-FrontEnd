import React from "react";

import ListEmployees from "../components/listComponents/ListEmployees";

export default function Employees() {
  return (
    <div>
      <h1>Empleados</h1>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav"></div>
      </nav>
      <ListEmployees />
    </div>
  );
}
