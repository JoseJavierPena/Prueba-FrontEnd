import React from "react";
import { Link } from "react-router-dom";

export default function DeleteStudies() {
  return (
    <div>
      <h1>Borrando estudios</h1>
      <Link type="button" className="btn  me-2 btn-danger" to="/deleteStudies">
        Delete
      </Link>
    </div>
  );
}
