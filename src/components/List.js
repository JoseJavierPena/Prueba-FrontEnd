import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>Jose</td>
            <td>Correo</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default List;
