import React from "react";
import { Link } from "react-router-dom";

export default function EditEmployees() {
  return (
    <div>
      <h1>Editando empleados</h1>
      <Link type="button" className="btn btn-warning me-2" to="/editEmployees">
        Edit
      </Link>
    </div>
  );
}
