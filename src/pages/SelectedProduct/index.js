import './style.css'

import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SelectedProduct(props) {
  const location = useLocation()
  const idDoProduto = location.state.id
  const nomeDoProduto = location.state.nome_prod
  const imagemProduto = location.state.imagem_prod
  const valorDoProduto = location.state.preco_prod

  console.log(idDoProduto)

  function componentDidMount() {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    componentDidMount()
  }, [])

  const navigate = useNavigate()

  //   useEffect(() => {
  //     getProductById()
  //       .then((res) => {
  //         setData(res.data)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, [])

  // function getProductData() {
  //   axios
  //      .get(`http://localhost:8000/listarProduto/${idDoProduto}`)
  //     , {
  //       params: { id: idDoProduto },
  //     }
  //     .then((response) => {
  //       console.log(response.data)
  //       setProdutoSelecionado(response.data)
  //     }
  //     )
  // }

  // .get('http://localhost:8000/listarProduto/id/', {

  // const navigate = useNavigate("/selectedProduct")
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/listarProduto/${idDoProduto}`)
  //     .then((response) => {
  //       setProdutoSelecionado(response.data)
  //     })
  // }, [])

  // const localhost = 'http://localhost:8000'

  // async function getProductsData(props) {
  //   const data = await axios.get(`${localhost}/listarProduto/${idDoProduto}`)
  //   setProdutoSelecionado(data.data)
  //   console.log(props.imagem.id)
  // }

  // useEffect(() => {
  //   getProductsData()
  // }, [])

  return (
    <div className="main-container">
      <Header />
      <div className="cont1">
        <div className="cont2">
          <div className="row">
            <div className="col">
              <div className="img">
                <Card
                  nome={nomeDoProduto}
                  preco={valorDoProduto}
                  imagem={imagemProduto}
                />
              </div>
            </div>
            <div className="col">
              <br />
              <br />
              <h2 className="mb mt">{nomeDoProduto}</h2>
              <h3 className="mb">{valorDoProduto}</h3>
              <br />
              <button className="btn" onClick={() => navigate('/homepage')}>
                COMPRAR AGORA
              </button>
              <br />
              <button className="btn" onClick={() => navigate('/homepage')}>
                ADICIONAR AO CARRINHO
              </button>
              <br />
              <br />
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
            <div className="home-page"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
