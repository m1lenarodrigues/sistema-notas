import React, { Component } from "react";
import CardNotas from "../notas/CardNotas";

import "./listaDeNotas.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <div className="lista-notas-geral">
        <ul>
          {this.props.notas.map((nota, index) => {
            return (
              <li key={index} className="listaNotas">
                <CardNotas titulo={nota.titulo} descricao={nota.descricao} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListaDeNotas;
