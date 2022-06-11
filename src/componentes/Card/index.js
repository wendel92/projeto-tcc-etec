import './style.css'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Image } from 'react-bootstrap' 


export default function Card(props) {
  const [user, setUser] = useState()
  const [valor, setValor] = useState('')

  useEffect(() => {
    setValor(props.preco.replace('.', ','))
  }, [])

  // Adicionando informações do bd no card.
  return (
    <div className="card-container">
      <div className="description">
        <Image source
          className="productImage"
          src={'./uploads/' + props.imagem}
          alt={props.nome}
        />
        <p>{props.nome}</p>

        <p>{valor}</p>
      </div>
    </div>
  )
}
