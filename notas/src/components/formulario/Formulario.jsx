import React, { Component } from "react";
import "./formulario.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.descricao = "";
  }

  handlerMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  handlerMudancaTexto(evento) {
    evento.stopPropagation();
    this.descricao = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    this.props.criarNota(this.titulo, this.descricao);
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        <input
          className="input"
          type="text"
          placeholder="Título"
          onChange={this.handlerMudancaTitulo.bind(this)}
        />
        <textarea
          className="textArea"
          placeholder="Descrição"
          onChange={this.handlerMudancaTexto.bind(this)}
        />

        <button className="botao">Cadastrar</button>
      </form>
    );
  }
}

export default Formulario;
