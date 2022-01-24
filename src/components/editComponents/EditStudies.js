import React from "react";
import { Link } from "react-router-dom";

export default function EditStudies() {
  return (
    <div>
      <h1>Editando estudios</h1>
      <Link type="button" className="btn btn-warning me-2" to="/editStudies">
        Edit
      </Link>
    </div>
  );
}
