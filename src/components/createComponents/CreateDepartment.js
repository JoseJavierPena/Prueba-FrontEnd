import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export default class CreateDepartment extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    DeptoName: [],
  };

  componentDidMount() {
    //this.getDepartment();
    console.log(this.state.DeptoName);
  }

  // async getDepartment() {
  //   const res = await axios.get("http://128.199.11.216/api/departments");

  //   this.setState({ DeptoName: res.data });
  // }

  onChangeDeptoName = (e) => {
    this.setState({
      DeptoName: e.target.value,
    });
  };

  sendData = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://128.199.11.216/api/departments", {
      DeptoName: this.state.DeptoName,
    });
    console.log("Departamento enviado", res);
    this.setState({ DeptoName: "" });
    //this.getDepartment();
  };

  render() {
    const { DeptoName } = this.state;

    return (
      <div className="card">
        <div className="card-header">Departamentos</div>
        <div className="card-body">
          <form onSubmit={this.sendData}>
            <div className="form-group">
              <label htmlFor="">Nombre del departamento</label>
              <input
                type="text"
                name="DeptoName"
                id="DeptoName"
                className="form-control"
                value={DeptoName}
                onChange={this.onChangeDeptoName}
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
