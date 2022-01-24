import React from "react";

import ListStudies from "../components/listComponents/ListStudies";

export default function Studies() {
  return (
    <div>
      <h1>Estudios</h1>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav"></div>
      </nav>
      <ListStudies />
    </div>
  );
}
