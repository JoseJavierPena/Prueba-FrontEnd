import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default class CreateStudies extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    employeeid: "",
    studiename: "",
  };

  componentDidMount() {
    //this.getStudies();
    console.log(this.state.employeeid);
  }

  // async getStudies() {
  //   const res = await axios.get("http://128.199.11.216/api/studies");

  //   this.setState({ employeeid: res.data, studiename: res.data });
  // }

  onChangeEmployeeid = (e) => {
    this.setState({
      employeeid: e.target.value,
    });
  };

  onChangeStudiename = (e) => {
    this.setState({
      studiename: e.target.value,
    });
  };

  sendData = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://128.199.11.216/api/studies", {
      employeeid: this.state.employeeid,
      studiename: this.state.studiename,
    });
    console.log("Empleado enviado", res);
    this.setState({ employeeid: "", studiename: "" });
    //this.getStudies();
  };

  render() {
    const { employeeid, studiename } = this.state;

    return (
      <div className="card">
        <div className="card-header">Estudios</div>
        <div className="card-body">
          <form onSubmit={this.sendData}>
            <div className="form-group">
              <label htmlFor="">ID de los estudios</label>
              <input
                type="text"
                name="employeeid"
                id="employeeid"
                className="form-control"
                value={employeeid}
                onChange={this.onChangeEmployeeid}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="">Nombre de los estudios</label>
              <input
                type="text"
                name="studiename"
                id="studiename"
                className="form-control"
                value={studiename}
                onChange={this.onChangeStudiename}
                placeholder=""
                aria-describedby="helpId"
              />
            </div>

            <div className="btn-group p-4" role="group" aria-label="">
              <button type="submit" className="btn btn-success">
                Agregar nuevo departamento
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
