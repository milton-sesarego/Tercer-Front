import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import PanelUsuarios from "./components/PanelUsuarios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header container">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3>Panel de control de Usuarios</h3>
          <PanelUsuarios />
        </header>
      </div>
    );
  }
}

export default App;
