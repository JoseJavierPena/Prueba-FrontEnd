import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { MDBDataTableV5 } from "mdbreact";

// Lista para mostrar tabla con informacion
export default class ListStudies extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { datosCargados: false, estudios: [] };

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
    const res = await axios.get("http://128.199.11.216/api/studies");
    this.setState({ estudios: res.data });
    this.setState({ datosCargados: true });
    console.log(res);
  }

  render() {
    const { datosCargados, estudios } = this.state;
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
              to="/createStudies"
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
                  <th>ID del empleado</th>
                  <th>Nombre de estudio</th>
                  <th>ID del departamento</th>
                  <th>Creado en</th>
                  <th>Actualizado en</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.estudios.map((estudio) => (
                  <tr key={estudio.id}>
                    <td>{estudio.id}</td>
                    <td>{estudio.employeeid}</td>
                    <td>{estudio.studiename}</td>
                    <td>{estudio.created_at}</td>
                    <td>{estudio.updated_at}</td>
                    <td>
                      <div className="btn-group" role="group">
                        <Link
                          type="button"
                          className="btn btn-warning me-2"
                          to="/editStudies"
                        >
                          Editar
                        </Link>
                        <Link
                          type="button"
                          className="btn btn-danger me-2"
                          to="/deleteStudies"
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
