import React from "react";
import { Link } from "react-router-dom";

export default function DeleteDepartment() {
  return (
    <div>
      <h1>Borrando departamento</h1>
      <Link
        type="button"
        className="btn  me-2 btn-danger"
        to="/deleteDepartment"
      >
        Delete
      </Link>
    </div>
  );
}
