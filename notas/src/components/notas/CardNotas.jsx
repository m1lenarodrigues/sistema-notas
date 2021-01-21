import React, { Component } from "react";
import "./cardNotas.css";

class CardNotas extends Component {
  render() {
    return (
      <section className="card-notas-geral">
        <header className="card-nota">
          <h3 className="card-nota-titulo"> {this.props.titulo}</h3>
        </header>
        <p className="carne-nota-descricao">{this.props.descricao}</p>
      </section>
    );
  }
}

export default CardNotas;
