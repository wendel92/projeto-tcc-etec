import './style.css'
import React, { useEffect } from 'react'
import Card from '../Card/'
import api from '../../services/api'
import { getAllProducts } from '../../services/products.service'
import { getAllImages } from '../../services/images.services'

export default function HomePage() {
  const [cards, setCards] = React.useState([])
  const [imagens, setImagens] = React.useState([])
 
  const consultarCards = async () => {
    const response = await getAllProducts()
    const lista = []

    response.map((card) => {
      lista.push(card)
    })
    setCards(lista)
  }

  const consultarImages = async () => {
    const response = await getAllImages()
    const lista = []

    response.map((imagem) => {
      lista.push(imagem)
    })
    setImagens(lista)
  }

  useEffect(() => {
    consultarCards()
    // consultarImagens()
  }, [])

  return (
    <div className="home-page">
      {cards &&
        cards.map((item, index) => (
          <Card
            imagem={item.image}
            nome={item.name_product}
            preco={item.price_product}
            id={item.id}
          />
        ))}
    </div>
  )
}
