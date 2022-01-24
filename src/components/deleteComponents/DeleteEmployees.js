import React from "react";
import { Link } from "react-router-dom";

export default function DeleteEmployees() {
  return (
    <div>
      <h1>Borrando empleados</h1>
      <Link
        type="button"
        className="btn  me-2 btn-danger"
        to="/deleteEmployees"
      >
        Delete
      </Link>
    </div>
  );
}
