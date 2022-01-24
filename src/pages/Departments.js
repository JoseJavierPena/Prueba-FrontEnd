import React from "react";

import ListDepartments from "../components/listComponents/ListDepartments";
// import List from "../components/listComponents/ListDepartments";
// import Edit from "../components/EditButton";
// import Delete from "../components/DeleteButton";

export default function Departments() {
  return (
    <div>
      <h1>Departamentos</h1>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav"></div>
      </nav>
      <ListDepartments />
    </div>
  );
}
