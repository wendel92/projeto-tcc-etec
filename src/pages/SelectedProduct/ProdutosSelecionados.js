// import './style.css'

// import React from 'react'
// import Header from '../../componentes/Header'
// import Footer from '../../componentes/Footer'
// import Card from '../../componentes/Card'
// import { Button } from 'react-bootstrap'
// import { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// // import { useNavigate } from 'react-router-dom'

// export default function SelectedProduct(props) {
//   const location = useLocation()
//   const [produtoSelecionado, setProdutoSelecionado] = useState()
//   const idDoProduto = location.state.id
//   const [valor, setValor] = useState('')

//   const api = axios.create({
//     baseURL: 'http://localhost:8000',
//   })

//   //   produtoSelecionado.map((produto) => {
//   //     setValor(produto.price_product)
//   //     }
//   //     )

//   async function getProductsData() {
//     const data = await axios
//       .get(api + '/listarProduto/', { params: { id: idDoProduto } })
//       .then((response) => {
//         console.log(response.data)
//         setProdutoSelecionado(response.data)
//       })
//   }

//   useEffect(() => {
//     axios
//     .get(api + '/listarProduto/', { params: { id: idDoProduto } })
//     .then((response) => {
//       console.log(response.data)
//       setProdutoSelecionado(response.data)
//     })
//   }, [])

//   console.log(props.id)

//   return (
//     <div className="main-container">
//       <Header />
//       <div className="cont1">
//         <div className="cont2">
//           <div className="row">
//             <div className="col">
//               <div
//                 className="img"
//                 src={'/uploads/' + props.imagem}
//                 alt={props.nome}
//               ></div>
//             </div>
//             <div className="col">
//               <br />
//               <br />
//               <h2 className="mb mt">{props.name_product}</h2>
//               <h3 className="mb">{props.price_product}</h3>
//               <h3>{props.stock}</h3>
//               <h3 className="mb">{valor}</h3>
//               <br />

//               <Button className="btn">Comprar Agora</Button>
//               <Button className="btn">Adicionar ao Carrinho</Button>
//             </div>
//             <h4>Descrição</h4>
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam.
//             </span>
//           </div>
//           <div className="row">
//             <div className="col">
//               <h4 className="txt-prodSem">Produtos Semelhantes</h4>
//             </div>
//             <div className="home-page">
//               <Card />
//               <Card />
//               <Card />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// // import { useEffect, useState } from 'react'
// // import { useLocation } from 'react-router-dom'

// // export default function ProdutosSelecionados() {
// //   const location = useLocation()
// //   const [produtoSelecionado, setProdutoSelecionado] = useState()
// //   const idDoProduto = location.state.id

// //   useEffect(() => {
// //     // FAZ A REQUISIÇÃO COM O AXIOS
// //     // axios.get(`/products/${idDoProduto}`)
// //     // RECEBE A RESPOSTA E ARMAZENA NA VARIAVEL
// //     // setProdutoSelecionado(RETORNO DA REQUISIÇÃO)
// //   }, [])

// //   return (
// //     <div>
// //       {/* REALIZA UM MAP DO RETORNO

// //       produtoSelecionado.map(produto => (
// //           <SEUCOMPONENTE
// //           passandoProps={produto.nome}
// //           passandoProps={produto.valor}
// //           passandoProps={produto.imagem}
// //           >
// //       ))

// //       */}
// //     </div>
// //   )
// // }

// // /* NO COMPONENTE
// // SEUCOMPONENTE (props) {
// //     <div>
// //         passandoProps={produto.nome}
// //     <div/>
// //     <div>
// //         passandoProps={produto.valor}
// //     <div/>
// //     <div>
// //         passandoProps={produto.imagem}
// //     <div/>
// // }*/
