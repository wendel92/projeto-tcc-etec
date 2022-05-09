// import './style.css'
// import React, { useEffect } from 'react'
// import Card from '../Card/'
// import api from '../../services/api'
// import { getAllProducts } from '../../services/products.service'

// export default function HomePage() {
//   const [cards, setCards] = React.useState([])

//   const consultarCards = async () => {

    
//     const response = await getAllProducts()
//     setCards(response)
//   }

//   useEffect(() => {
//     consultarCards()
//   }, [cards])

//   return (
//     <div className="home-page">
//       {cards &&
//         cards.map((item) => (
//           <Card
//             imagem={item.image}
//             nome={item.name_product}
//             descricao={item.description}
//           />
//         ))}
//     </div>
//   )
// }
