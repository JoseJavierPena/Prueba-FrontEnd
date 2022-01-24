import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default class CreateEmployees extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    nombres: "",
    apellidos: "",
    deptoid: "",
    sexo: "",
    cedula: "",
    direccion: "",
    telcasa: "",
    telmobil: "",
    // salariobase: "",
    // descuento: "",
    // salarioneto: "",
  };

  componentDidMount() {
    //this.getEmployee();
    console.log(this.state.nombres);
  }

  // async getEmployee() {
  //   const res = await axios.get("http://128.199.11.216/api/employees");

  //   this.setState({
  //     nombres: res.data,
  //     apellidos: res.data,
  //     deptoid: res.data,
  //     sexo: res.data,
  //     cedula: res.data,
  //     direccion: res.data,
  //     telcasa: res.data,
  //     telmobil: res.data,
  //   });
  // }

  onChangeEmployeeName = (e) => {
    this.setState({
      nombres: e.target.value,
      // apellidos: e.target.value,
      // deptoid: e.target.value,
      // sexo: e.target.value,
      // cedula: e.target.value,
      // direccion: e.target.value,
      // telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };

  onChangeEmployeeApellidos = (e) => {
    this.setState({
      // nombres: e.target.value,
      apellidos: e.target.value,
      // deptoid: e.target.value,
      // sexo: e.target.value,
      // cedula: e.target.value,
      // direccion: e.target.value,
      // telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };

  onChangeEmployeeDeptoid = (e) => {
    this.setState({
      // nombres: e.target.value,
      //apellidos: e.target.value,
      deptoid: e.target.value,
      // sexo: e.target.value,
      // cedula: e.target.value,
      // direccion: e.target.value,
      // telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };

  onChangeEmployeeSexo = (e) => {
    this.setState({
      // nombres: e.target.value,
      //apellidos: e.target.value,
      //deptoid: e.target.value,
      sexo: e.target.value,
      // cedula: e.target.value,
      // direccion: e.target.value,
      // telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };
  onChangeEmployeeCedula = (e) => {
    this.setState({
      // nombres: e.target.value,
      //apellidos: e.target.value,
      //deptoid: e.target.value,
      //sexo: e.target.value,
      cedula: e.target.value,
      // direccion: e.target.value,
      // telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };
  onChangeEmployeeDireccion = (e) => {
    this.setState({
      // nombres: e.target.value,
      //apellidos: e.target.value,
      //deptoid: e.target.value,
      //sexo: e.target.value,
      // cedula: e.target.value,
      direccion: e.target.value,
      // telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };
  onChangeEmployeeTelcasa = (e) => {
    this.setState({
      // nombres: e.target.value,
      //apellidos: e.target.value,
      //deptoid: e.target.value,
      //sexo: e.target.value,
      // cedula: e.target.value,
      // direccion: e.target.value,
      telcasa: e.target.value,
      // telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };
  onChangeEmployeeTelmobil = (e) => {
    this.setState({
      // nombres: e.target.value,
      //apellidos: e.target.value,
      //deptoid: e.target.value,
      //sexo: e.target.value,
      // cedula: e.target.value,
      // direccion: e.target.value,
      // telcasa: e.target.value,
      telmobil: e.target.value,
      // salariobase: e.target.value,
      // descuento: e.target.value,
      // salarioneto: e.target.value,
    });
  };

  sendData = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://128.199.11.216/api/employees", {
        nombres: this.state.nombres,
        apellidos: this.state.apellidos,
        deptoid: this.state.deptoid,
        sexo: this.state.sexo,
        cedula: this.state.cedula,
        direccion: this.state.direccion,
        telcasa: this.state.telcasa,
        telmobil: this.state.telmobil,
        // salariobase: this.state.nombres,
        // descuento: this.state.nombres,
        // salarioneto: this.state.nombres,
      });
      console.log("Empleado enviado", res);
      this.setState({
        nombres: "",
        apellidos: "",
        deptoid: "",
        sexo: "",
        cedula: "",
        direccion: "",
        telcasa: "",
        telmobil: "",
      });
    } catch (error) {
      console.log(error);
    }
    //this.getDepartment();
  };

  render() {
    const {
      nombres,
      apellidos,
      deptoid,
      sexo,
      cedula,
      direccion,
      telcasa,
      telmobil,
    } = this.state;

    return (
      <div className="card p-3">
        <div className="card-header">Empleados</div>
        <div className="card-body">
          <form onSubmit={this.sendData}>
            <div className="form-group">
              <label htmlFor="">Nombre del empleado</label>
              <input
                type="text"
                name="nombres"
                id="nombres"
                className="form-control"
                value={nombres}
                onChange={this.onChangeEmployeeName}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Apellido del empleado</label>
              <input
                type="text"
                name="apellidos"
                id="apellidos"
                className="form-control"
                value={apellidos}
                onChange={this.onChangeEmployeeApellidos}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Número del departamento</label>
              <input
                type="text"
                name="deptoid"
                id="deptoid"
                className="form-control"
                value={deptoid}
                onChange={this.onChangeEmployeeDeptoid}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Sexo del empleado</label>
              <input
                type="text"
                name="sexo"
                id="sexo"
                className="form-control"
                value={sexo}
                onChange={this.onChangeEmployeeSexo}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Cédula del empleado</label>
              <input
                type="text"
                name="cedula"
                id="cedula"
                className="form-control"
                value={cedula}
                onChange={this.onChangeEmployeeCedula}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Dirección del empleado</label>
              <input
                type="text"
                name="direccion"
                id="direccion"
                className="form-control"
                value={direccion}
                onChange={this.onChangeEmployeeDireccion}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Teléfono casa del empleado</label>
              <input
                type="text"
                name="telcasa"
                id="telcasa"
                className="form-control"
                value={telcasa}
                onChange={this.onChangeEmployeeTelcasa}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Teléfono móbil del empleado</label>
              <input
                type="text"
                name="telmobil"
                id="telmobil"
                className="form-control"
                value={telmobil}
                onChange={this.onChangeEmployeeTelmobil}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="">Salior base del empleado</label>
              <input
                type="text"
                name="employee"
                id="employee"
                className="form-control"
                value={EmployeeName}
                onChange={this.onChangeEmployeeName}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Descuento del empleado</label>
              <input
                type="text"
                name="employee"
                id="employee"
                className="form-control"
                value={EmployeeName}
                onChange={this.onChangeEmployeeName}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Salario neto del empleado</label>
              <input
                type="text"
                name="employee"
                id="employee"
                className="form-control"
                value={EmployeeName}
                onChange={this.onChangeEmployeeName}
                placeholder=""
                aria-describedby="helpId"
              />
            </div> */}

            <div className="btn-group p-4" role="group" aria-label="">
              <button type="submit" className="btn btn-success">
                Agregar nuevo empleado
              </button>
              <Link className="btn btn-cancel" to={"/departments"}>
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
