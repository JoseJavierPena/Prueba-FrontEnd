import React from "react";
import { Link } from "react-router-dom";

export default function EditDepartment() {
  return (
    <div>
      <h1>Editando departamento</h1>
      <Link type="button" className="btn btn-warning me-2" to="/editDepartment">
        Edit
      </Link>
    </div>
  );
}
