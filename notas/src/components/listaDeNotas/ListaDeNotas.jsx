import React, { Component } from "react";
import CardNotas from "../notas/CardNotas";

import "./listaDeNotas.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <div className="lista-notas-geral">
        <ul>
          {Array.of("Trabalho", "Estudos", "Pessoal").map(
            (categoria, index) => {
              return (
                <li key={index} className="listaNotas">
                  <div>{categoria}</div>
                  <CardNotas />
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}

export default ListaDeNotas;
