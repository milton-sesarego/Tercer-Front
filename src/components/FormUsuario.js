import React, { Component } from "react";

class FormUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: 0,
      name: "",
      surname: "",
      username: "",
      email: "",
      data: { age: "", isMale: "" },
      cancelar: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  reload() {
    this.setState({
      _id: this.props.usuario ? this.props.usuario.id : 0,
      name: this.props.usuario ? this.props.usuario.name : "",
      surname: this.props.usuario ? this.props.usuario.surname : "",
      username: this.props.usuario ? this.props.usuario.username : "",
      email: this.props.usuario ? this.props.usuario.email : "",
      data: {
        age: this.props.usuario ? this.props.usuario.data.age : "",
        isMale: this.props.usuario ? this.props.usuario.data.isMale : "",
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
      this.state.name.length === 0 ||
      this.state.surname.length === 0 ||
      this.state.username.length === 0
    ) {
      return;
    }

    const us = {
      _id: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      email: this.state.email,
      data: { age: this.state.data.age, isMale: this.state.data.isMale },
    };

    this.props.crearEditarUsuario(us);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      _id: 0,
      name: "",
      surname: "",
      username: "",
      email: "",
      data: { age: "", isMale: "" },

      cancelar: false,
    });
  }

  render() {
    return (
      <div
        className={
          (this.props.editando ? "form-usuario-selected" : "form-usuario") +
          " mb-3"
        }
      >
        <h4>{this.props.editando ? "Modificación" : "Alta Usuario"}</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              className="form-control"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />

            <label htmlFor="surname">Apellido</label>
            <input
              className="form-control"
              name="surname"
              onChange={this.handleChange}
              value={this.state.surname}
            />

            <label htmlFor="username">Usuario</label>
            <input
              className="form-control"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />

            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />

            <label htmlFor="age">age</label>
            <input
              className="form-control"
              name="age"
              onChange={this.handleChange}
              value={this.state.data.age}
            />

            <label htmlFor="isMale">isMale</label>
            <input
              type="checkbox"
              className="form-control"
              name="isMale"
              onChange={this.handleChange}
              checked={this.state.data.isMale}
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
