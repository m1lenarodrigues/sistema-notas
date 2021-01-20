import React, { Component } from "react";
import "./formulario.css";

class Formulario extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  handlerMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }
  render() {
    return (
      <form className="formulario">
        <input
          className="input"
          type="text"
          placeholder="Título"
          onChange={this.handlerMudancaTitulo.bind(this)}
        />
        <textarea className="textArea" placeholder="Descrição" />

        <button className="botao">Cadastrar</button>
      </form>
    );
  }
}

export default Formulario;
