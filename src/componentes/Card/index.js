import './style.css'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function Card(produtos) {
  const [valor, setValor] = useState('')

  useEffect(() => {
    setValor(produtos.preco.replace('.', ','))
  }, [])

  // Usa a navegação
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    // Tem que ser sempre um botão ou algo que recebe uma ação de Evento do DOM
    // Para voce poder acessar o evento via propriedade da função (e)
    // e.currentTarget.id (evento recebido através do click (recebe o ID que vinculamos no botão))

    navigate('/selectedProduct', {
      state: {
        id: e.currentTarget.id,
        nome_prod: produtos.nome,
        imagem_prod: produtos.imagem,
        preco_prod: produtos.preco,
        descricao_prod: produtos.descricao,
        link: produtos.link,
      },
    })
  }

  return (
    <div className="card-container">
      <div className="description">
        {/* Precisa receber um ID no loop para ser vinculado ao item JSX (componentes) */}
        <button className="wrapperImg" onClick={handleClick} id={produtos.id}>
          <img className="productImage" src={produtos.imagem} alt={''} />
        </button>
        <br />
        <p className="font-description">{produtos.nome}</p>

        <b>
          <p>R$ {valor}</p>
        </b>
      </div>
    </div>
  )
}
