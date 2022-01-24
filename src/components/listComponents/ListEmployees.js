import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { MDBDataTableV5 } from "mdbreact";

// Lista para mostrar tabla con informacion
export default class ListEmployees extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { datosCargados: false, empleados: [] };

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
    const res = await axios.get("http://128.199.11.216/api/employees");
    this.setState({ empleados: res.data });
    this.setState({ datosCargados: true });
    console.log(res);
  }

  render() {
    const { datosCargados, empleados } = this.state;
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
              to="/createEmployees"
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
                  <th>Nombres del empleado</th>
                  <th>Apellidos del empleado</th>
                  <th>ID del departamento</th>
                  <th>Sexo</th>
                  <th>Cédula</th>
                  <th>Dirección</th>
                  <th>Teléfono casa</th>
                  {/* <th>Teléfono móbil</th>
                  <th>Salario base</th>
                  <th>Descuento</th>
                  <th>Salario neto</th>
                  <th>Creado en</th>
                  <th>Actualizado en</th> */}
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.empleados.map((empleado) => (
                  <tr key={empleado.id}>
                    <td>{empleado.id}</td>
                    <td>{empleado.nombres}</td>
                    <td>{empleado.apellidos}</td>
                    <td>{empleado.deptoid}</td>
                    <td>{empleado.sexo}</td>
                    <td>{empleado.cedula}</td>
                    <td>{empleado.direccion}</td>
                    <td>{empleado.telcasa}</td>
                    {/* <td>{empleado.telmobil}</td>
                    <td>{empleado.salariobase}</td>
                    <td>{empleado.descuento}</td>
                    <td>{empleado.salarioneto}</td>
                    <td>{empleado.created_at}</td>
                    <td>{empleado.updated_at}</td> */}
                    <td>
                      <div className="btn-group" role="group">
                        <Link
                          type="button"
                          className="btn btn-warning me-2"
                          to="/editEmployees"
                        >
                          Editar
                        </Link>
                        <Link
                          type="button"
                          className="btn btn-danger me-2"
                          to="/deleteEmployees"
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
