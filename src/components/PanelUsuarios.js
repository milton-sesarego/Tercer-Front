import React, { Component } from "react";
import ListaUsuarios from "./ListaUsuarios";
import FormUsuario from "./FormUsuario";

class PanelUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // usuarios: [
      //   {
      //     id: 1,
      //     name: "milton",
      //     surname: "sesarego",
      //     username: "mlt",
      //     email: "asd@qwe",
      //     data: { age: 27, isMale: true },
      //   },
      //   {
      //     id: 2,
      //     name: "resu",
      //     surname: "user",
      //     username: "us",
      //     email: "",
      //     data: { age: "", isMale: "" },
      //   },
      // ],
      usuarios: [],
      usuarioSelec: null,
      editando: false,
    };
    this.crearEditarUsuario = this.crearEditarUsuario.bind(this);
    this.eliminarUsuario = this.eliminarUsuario.bind(this);
    this.seleccionarUsuario = this.seleccionarUsuario.bind(this);

    this.formElement = React.createRef();
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users/get-all")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          usuarios: res.data,
        });
      });
  }

  crearEditarUsuario(us) {
    if (us) {
      var aux = this.state.usuarios.concat();
      if (us.id === 0) {
        aux.push(us);
      } else {
        aux.forEach((item, index) => {
          if (item._id === us._id) aux[index] = us;
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
      return obj._id !== usId;
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
