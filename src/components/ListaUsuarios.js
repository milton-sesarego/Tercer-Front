import React, { Component } from "react";
import PropTypes from "prop-types";

class ListaUsuarios extends Component {
  constructor(props) {
    super(props);
  }

  eliminarUsuario(us) {
    this.props.eliminarUsuario(us.id);
  }

  seleccionarUsuario(us) {
    this.props.seleccionarUsuario(us);
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
              <td colSpan="2">Acción</td>
            </tr>
          </thead>
          <tbody>
            {this.props.usuarios.map((us) => (
              <tr
                key={us.id}
                className={
                  this.props.usuario && us.id === this.props.usuario.id
                    ? "rowSelected"
                    : ""
                }
              >
                <td>{us.nombre}</td>
                <td>{us.apellido}</td>
                <td>{us.nombreUsuario}</td>
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
