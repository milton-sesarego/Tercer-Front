import React, { Component } from "react";

class ListaUsuarios extends Component {
  constructor(props) {
    super(props);
  }

  eliminarUsuario(us) {
    this.props.eliminarUsuario(us._id);
  }

  seleccionarUsuario(us) {
    this.props.seleccionarUsuario(us);
    // console.log(us);
  }

  render() {
    return (
      <div className="mb-3">
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Apellido</td>
              <td>Usuario</td>
              <td>Email</td>
              <td>Edad</td>
              <td>isMale</td>
              <td colSpan="2">Acción</td>
            </tr>
          </thead>
          <tbody>
            {this.props.usuarios.map((us) => (
              <tr
                key={us._id}
                className={
                  this.props.usuario && us._id === this.props.usuario._id
                    ? "rowSelected"
                    : ""
                }
              >
                <td>{us.name}</td>
                <td>{us.surname}</td>
                <td>{us.username}</td>
                <td>{us.email}</td>
                <td>{us.data.age}</td>
                <td>{us.data.isMale}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => this.seleccionarUsuario(us)}
                    disabled={this.props.editando ? true : false}
                  >
                    Editar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    // onClick={this.eliminarUsuario.bind(this, us)}
                    onClick={() => this.eliminarUsuario(us)}
                    disabled={this.props.editando ? true : false}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListaUsuarios;
