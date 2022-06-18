import './style.css'

import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { useLocation, useNavigate } from 'react-router-dom'

// import { useNavigate } from 'react-router-dom'

export default function SelectedProduct(produtos) {
  // Recebe os dados passados através da navegação
  const location = useLocation()
  const [produtoSelecionado, setProdutoSelecionado] = useState()
  const idDoProduto = location.state.id
  const nomeDoProduto = location.state.nome_prod
  const imagemProduto = location.state.imagem_prod
  const valorDoProduto = location.state.preco_prod
  console.log(location)
  const [valor, setValor] = useState('')

  //   produtoSelecionado.map((produto) => {
  //     setValor(produto.price_product)
  //     }
  //     )

  //   async function getProductsData() {
  //     const data = await axios
  //       .get(api + '/listarProduto/id/', { params: { id: idDoProduto } })
  //       .then((response) => {
  //         console.log(response.data)
  //         setProdutoSelecionado(response.data)
  //       })
  //   }

  return (
    <div className="main-container">
      <div>{nomeDoProduto}</div>
      <img src={imagemProduto}></img>
      {/* <Header />
      <div className="cont1">
        <div className="cont2">
          <div className="row">
            <div className="col">
              <div
                className="img"
                src={imagemProduto}
                alt={produtos.id}
              ></div>
            </div>
            <div className="col">
              <br />
              <br />
              <h2 className="mb mt">{produtos.name_product}</h2>
              <h3 className="mb">{produtos.price_product}</h3>
              <h3>{produtos.stock}</h3>
              <h3 className="mb">{valorDoProduto}</h3>
              <br />

              <Button className="btn">Comprar Agora</Button>
              <Button className="btn">Adicionar ao Carrinho</Button>
            </div>
            <h4>Descrição</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </span>
          </div>
          <div className="row">
            <div className="col">
              <h4 className="txt-prodSem">Produtos Semelhantes</h4>
            </div>
            <div className="home-page">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <Footer /> */}
    </div>
  )
}

// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'

// export default function ProdutosSelecionados() {
//   const location = useLocation()
//   const [produtoSelecionado, setProdutoSelecionado] = useState()
//   const idDoProduto = location.state.id

//   useEffect(() => {
//     // FAZ A REQUISIÇÃO COM O AXIOS
//     // axios.get(`/products/${idDoProduto}`)
//     // RECEBE A RESPOSTA E ARMAZENA NA VARIAVEL
//     // setProdutoSelecionado(RETORNO DA REQUISIÇÃO)
//   }, [])

//   return (
//     <div>
//       {/* REALIZA UM MAP DO RETORNO

//       produtoSelecionado.map(produto => (
//           <SEUCOMPONENTE
//           passandoProps={produto.nome}
//           passandoProps={produto.valor}
//           passandoProps={produto.imagem}
//           >
//       ))

//       */}
//     </div>
//   )
// }

// /* NO COMPONENTE
// SEUCOMPONENTE (props) {
//     <div>
//         passandoProps={produto.nome}
//     <div/>
//     <div>
//         passandoProps={produto.valor}
//     <div/>
//     <div>
//         passandoProps={produto.imagem}
//     <div/>
// }*/
