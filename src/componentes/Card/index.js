import './style.css'
import React, { useEffect, useState } from 'react'
// import api from '../../services/api'


export default function Card(props) {
  const [user, setUser] = useState()

  useEffect(() => {
    
  }, [])
  return (
    <div className="card-container">
      <div>
        <img
          className="image-container"
          src="./image/aromatizador2.jpg"
          alt=" "
        />
      </div>
      <div className="description">
      <p>Nome Produto</p>
        <p>Codigo do produto</p>
        <p>Preço 00,00</p>
      </div>
      </div>
      
        /* <img src={props.imagem} alt={props.descricao} />
        <p>{props.nome}</p>
        {props.descricao} */
        
    
  )
}
