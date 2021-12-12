import React from "react";
import './card.css'

function Card(props) {
  let id = props.nome
    return (
      <div className='card'>
        <div className='topo-card' id={id}>
          <img src={props.src} alt='icone'></img>
        </div>
        <div className='corpo-card'>
          <div className="nome-card">
            <p className='nome-atividade'> {props.titulo} </p>
            <p className='tres-pontos'> ... </p>
          </div>
          <div className="bloco-horas">
            <h1 className='horas'> {props.atual}hrs</h1>
            <p className='marcador-anterior'>Last {props.timeframe} - {props.anterior}rs</p>            
          </div>
        </div>
      </div>
    )
}

export default Card;