import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { MDBDataTableV5 } from "mdbreact";

// Lista para mostrar tabla con informacion
export default class ListDepartment extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { datosCargados: false, departamentos: [] };

  // Carga los datos de la API
  // loadData() {
  //   fetch("http://128.199.11.216/api/departments")
  //     .then((respuesta) => respuesta.json())
  //     .then((datosRespuesta) => {
  //       console.log(datosRespuesta);
  //       this.setState({ datosCargados: true, departamentos: datosRespuesta });
  //     })
  //     .catch();
  // }

  async componentDidMount() {
    // this.loadData();
    const res = await axios.get("http://128.199.11.216/api/departments");
    this.setState({ departamentos: res.data });
    this.setState({ datosCargados: true });
    // console.log(res);
  }

  render() {
    const { datosCargados, departamentos } = this.state;
    if (!datosCargados) {
      return (
        <div>
          <center>
            <h1>Cargando...</h1>
          </center>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-header">
            <Link
              type="button"
              className="btn btn-success me-2"
              to="/createDepartment"
            >
              Crear
            </Link>
          </div>
          <div className="card-body">
            <h4>Listado de empleados</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre del departamento</th>
                  <th>Creado en</th>
                  <th>Actualizado en</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.departamentos.map((departamento) => (
                  <tr key={departamento.id}>
                    <td>{departamento.id}</td>
                    <td>{departamento.DeptoName}</td>
                    <td>{departamento.created_at}</td>
                    <td>{departamento.updated_at}</td>
                    <td>
                      <div className="btn-group" role="group">
                        <Link
                          type="button"
                          className="btn btn-warning me-2"
                          to="/editDepartment"
                        >
                          Editar
                        </Link>
                        <Link
                          type="button"
                          className="btn btn-danger me-2"
                          to="/deleteDepartment"
                        >
                          Borrar
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      );
    }
  }
}
