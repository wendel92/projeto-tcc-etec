import './style.css'

import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Card from '../../componentes/Card'
import { Button } from 'react-bootstrap'
// import { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function SelectedProduct() {
  // const location = useLocation()
  // const [produtoSelecionado, setProdutoSelecionado] = useState()
  // const idDoProduto = location.state.id
  
  const navigate = useNavigate("/selectedProduct")
  // useEffect(() => {
  //   axios.get(`http://localhost:8000/listarProduto/${idDoProduto}`)
  //   .then(response => {
  //     setProdutoSelecionado(response.data)
  //   }
  //   )
  // }, [])

  // console.log(idDoProduto)

  // const localhost = 'http://localhost:8000'

  // async function getProductsData() {
  //   // const data = await axios.get(`${localhost}/listarProduto/${idDoProduto}`)
  //   // setProdutoSelecionado(data.data)
  // }

  // useEffect(() => {
  //   getProductsData()
  // }, [])

  // console.log(props.imagem.id)

  return (
    <div className="main-container">
      <Header />
      <div className="cont1">
        <div className="cont2">
          <div className="row">
            <div className="col">
              <div className="img">
                <Card 
                  className="img"
                  src={""}
                  alt={""}
                ></Card>
              </div>
            </div>
            <div className="col">
              <br />
              <br />
              {/* <h2 className="mb mt">{produtoSelecionado.nome}</h2>
              <h3 className="mb">{produtoSelecionado.price_product}</h3> */}
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
      <Footer />
    </div>
  )
}
