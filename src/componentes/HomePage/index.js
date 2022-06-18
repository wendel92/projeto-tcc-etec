import './style.css'
import React, { useEffect } from 'react'
import { getAllProducts } from '../../services/products.service'
import Card from '../../componentes/Card'

export default function HomePage() {
  const [cards, setCards] = React.useState([])
  

  useEffect(() => {
    getAllProducts().then(res => {
      setCards(res.data)
    }
    )
  }, [])
 

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
        cards.map((produtos, index) => (
          <Card
            nome={produtos.name_product}
            preco={produtos.price_product.replace('.', ',')}
            stock={produtos.stock}
            imagem={produtos.image}
            descricao={produtos.description}
            id={produtos.id}
            key={index}
          />
        ))}
        
    </div>
  )
}
