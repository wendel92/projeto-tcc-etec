import './style.css'
import React, { useEffect } from 'react'
import { getAllProducts } from '../../services/products.service'
import Card from '../../componentes/Card'

export default function HomePage() {
  const [cards, setCards] = React.useState([])

  const linksPagamentos = Object({ id: 1, link: 'https://pag.ae/7YoWCRwg4' }, 
  {id: 2, link: ""},
  )

  useEffect(() => {
    getAllProducts().then((res) => {
      setCards(res.data)
    })
  }, [])

  // O ARRAY ESTA CONSULTANDO MINHA LISTA DE PRODUTOS NO BD
  const consultarCards = async () => {
    const response = await getAllProducts()
    const lista = []

    response.map((card) => {
      lista.push(card)
    })
    setCards(lista)
    console.log(lista, 'lista')
  }

  useEffect(() => {
    consultarCards()
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
            link={produtos.id == linksPagamentos.id ?? linksPagamentos.link}
            id={produtos.id}
            key={index}
          />
        ))}
    </div>
  )
}
