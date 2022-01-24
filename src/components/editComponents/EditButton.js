import React from "react";
import { Link } from "react-router-dom";

export default function EditButton() {
  return (
    <div>
      <Link type="button" className="btn btn-warning me-2" to="/editDepartment">
        Edit
      </Link>
    </div>
  );
}
