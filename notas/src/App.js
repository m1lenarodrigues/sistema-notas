import { Component } from "react";
import Formulario from "./components/formulario/Formulario";
import ListaDeNotas from "./components/listaDeNotas/ListaDeNotas";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {};
  }
  criarNota(titulo, descricao) {
    const novaNota = { titulo, descricao };
    this.notas.push(novaNota);
    this.setState({
      notas: this.notas,
    });
  }
  render() {
    return (
      <div className="geral">
        <Formulario criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </div>
    );
  }
}

export default App;
