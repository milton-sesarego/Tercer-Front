import React, { Component } from "react";
import ListaUsuarios from "./ListaUsuarios";
import FormUsuario from "./FormUsuario";

class PanelUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [
        { id: 1, nombre: "milton", apellido: "sesarego", nombreUsuario: "mlt" },
        { id: 2, nombre: "resu", apellido: "user", nombreUsuario: "us" },
      ],
      usuarioSelec: null,
      editando: false,
    };
    this.crearEditarUsuario = this.crearEditarUsuario.bind(this);
    this.eliminarUsuario = this.eliminarUsuario.bind(this);
    this.seleccionarUsuario = this.seleccionarUsuario.bind(this);

    this.formElement = React.createRef();
  }

  crearEditarUsuario(us) {
    if (us) {
      var aux = this.state.usuarios.concat();
      if (us.id === 0) {
        aux.push(us);
      } else {
        aux.forEach((item, index) => {
          if (item.id === us.id) aux[index] = us;
        });
      }
      this.setState({ usuarios: aux, editando: false });
    } else {
      this.setState({ editando: false });
    }
  }

  seleccionarUsuario(usSel) {
    this.setState({ usuarioSelec: usSel, editando: true }, () => {
      this.formElement.current.reload();
    });
  }

  eliminarUsuario(usId) {
    var aux = this.state.usuarios.filter(function (obj) {
      return obj.id !== usId;
    });
    this.setState({ usuarios: aux, usuarioSelec: null }, () => {
      this.formElement.current.reload();
    });
  }

  render() {
    return (
      <div>
        <FormUsuario
          usuario={this.state.usuarioSelec}
          editando={this.state.editando}
          crearEditarUsuario={this.crearEditarUsuario}
          ref={this.formElement}
        />

        <ListaUsuarios
          usuarios={this.state.usuarios}
          usuario={this.state.usuarioSelec}
          editando={this.state.editando}
          eliminarUsuario={this.eliminarUsuario}
          seleccionarUsuario={this.seleccionarUsuario}
        />
      </div>
    );
  }
}

export default PanelUsuarios;
