import { Component } from "react";
import Formulario from "./components/formulario/Formulario";
import ListaDeNotas from "./components/listaDeNotas/ListaDeNotas";

class App extends Component {
  render() {
    return (
      <div className="geral">
        <Formulario />
        <ListaDeNotas />
      </div>
    );
  }
}

export default App;
