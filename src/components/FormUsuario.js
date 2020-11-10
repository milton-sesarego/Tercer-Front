import React, { Component } from "react";

class FormUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      nombre: "",
      apellido: "",
      nombreUsuario: "",
      email: "",
      datos: { edad: "", isMale: "" },
      cancelar: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  reload() {
    this.setState({
      id: this.props.usuario ? this.props.usuario.id : 0,
      nombre: this.props.usuario ? this.props.usuario.nombre : "",
      apellido: this.props.usuario ? this.props.usuario.apellido : "",
      nombreUsuario: this.props.usuario ? this.props.usuario.nombreUsuario : "",
      email: this.props.usuario ? this.props.usuario.email : "",
      datos: {
        edad: this.props.usuario ? this.props.usuario.datos.edad : "",
        isMale: this.props.usuario ? this.props.usuario.datos.isMale : "",
      },
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.cancelar) {
      this.props.crearEditarUsuario(null);
      this.clearForm();
      return;
    }
    if (
      this.state.nombre.length === 0 ||
      this.state.apellido.length === 0 ||
      this.state.nombreUsuario.length === 0
    ) {
      return;
    }

    const us = {
      id: this.state.id,
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      nombreUsuario: this.state.nombreUsuario,
      email: this.state.email,
      datos: { edad: this.state.datos.edad, isMale: this.state.datos.isMale },
    };

    this.props.crearEditarUsuario(us);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      id: 0,
      nombre: "",
      apellido: "",
      nombreUsuario: "",
      email: "",
      datos: { edad: "", isMale: "" },

      cancelar: false,
    });
  }

  render() {
    return (
      <div
        className={
          (this.props.editando ? "form-usuario-selected" : "form-usuario") +
          " mt-3 mb-3"
        }
      >
        <h4>
          {this.props.editando ? "Modificación de Usuario" : "Alta de Usuario"}
        </h4>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="form-control"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.nombre}
            />

            <label htmlFor="apellido">Apellido</label>
            <input
              className="form-control"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.apellido}
            />

            <label htmlFor="nombreUsuario">Usuario</label>
            <input
              className="form-control"
              name="nombreUsuario"
              onChange={this.handleChange}
              value={this.state.nombreUsuario}
            />

            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />

            <label htmlFor="edad">Edad</label>
            <input
              className="form-control"
              name="edad"
              onChange={this.handleChange}
              value={this.state.datos.edad}
            />

            <label htmlFor="isMale">isMale</label>
            <input
              type="checkbox"
              className="form-control"
              name="isMale"
              onChange={this.handleChange}
              checked={this.state.datos.isMale}
            />
          </div>
          <button type="submit" className="btn btn-success">
            {this.props.editando ? "Actualizar" : "Agregar"}
          </button>
          {this.props.editando ? (
            <button
              className="btn btn-dark"
              onMouseDown={() => this.setState({ cancelar: true })}
            >
              Cancelar
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default FormUsuario;
