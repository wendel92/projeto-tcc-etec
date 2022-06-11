import './style.css'
import React, { useEffect } from 'react'
import { getAllProducts } from '../../services/products.service'
import Card from '../../componentes/Card'

export default function HomePage() {
  const [cards, setCards] = React.useState([])
  

  const consultarCards = async () => {
    const response = await getAllProducts()
    const lista = []

    response.map((card) => {
      lista.push(card)
    })
    setCards(lista)
  }

  useEffect(() => {
    consultarCards()
    // consultarImagens()
  }, [])

  return (
    <div className="home-page">
      {cards &&
        cards.map((item, img, index) => (
          <Card
            imagem={img.image}
            nome={item.name_product}
            preco={item.price_product.replace('.', ',')}
            stock={item.stock}
            id={item.id}
            key={item.id}
          />
        ))}
    </div>
  )
}
