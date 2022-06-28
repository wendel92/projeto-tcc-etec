import './style.css'

import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

export default function SelectedProduct(props) {
  const location = useLocation()
  const idDoProduto = location.state.id
  const nomeDoProduto = location.state.nome_prod
  const imagemProduto = location.state.imagem_prod
  const valorDoProduto = location.state.preco_prod
  const descricaoDoProduto = location.state.descricao_prod

  console.log(idDoProduto)

  const linksPagamentos = [
    { id: 1, link: 'https://pag.ae/7Yp2hADX5' },
    { id: 2, link: 'https://pag.ae/7Yp2jwFm4' },
    { id: 3, link: 'https://pag.ae/7Yp2koKKn' },
    { id: 4, link: 'https://pag.ae/7Yp2o8Ueo' },
    { id: 5, link: 'https://pag.ae/7Yp2qbiQp' },
    { id: 6, link: 'https://pag.ae/7Yp2uSM7L' },
    { id: 7, link: 'https://pag.ae/7Yp2xw3nJ' },
    { id: 8, link: 'https://pag.ae/7Yp2BiZun' },
    { id: 9, link: 'https://pag.ae/7Yp2DWmHJ' },
    { id: 10, link: 'https://pag.ae/7Yp2MgN4p' },
    { id: 11, link: 'https://pag.ae/7Yp2NKExH' },
    { id: 12, link: 'https://pag.ae/7Yp2Q_HM7' },
    { id: 13, link: 'https://pag.ae/7Yp2S37Vn' },
    { id: 14, link: 'https://pag.ae/7Yp2TxECN' },
    { id: 15, link: 'https://pag.ae/7Yp2VGqzo' },
    { id: 16, link: 'https://pag.ae/7Yp2Xk7sG' },
    { id: 17, link: 'https://pag.ae/7Yp2Yw2w3' },
    { id: 18, link: 'https://pag.ae/7Yp3snAeo' },
    { id: 19, link: 'https://pag.ae/7Yp3tJbhN' },
    { id: 20, link: 'https://pag.ae/7Yp3uXw4q' },
    { id: 21, link: 'https://pag.ae/7Yp3vXqM5' },
    { id: 22, link: 'https://pag.ae/7Yp3wRPuq' },
    { id: 23, link: 'https://pag.ae/7Yp3y8nYL' },
    { id: 24, link: 'https://pag.ae/7Yp3zgKB4' },
    { id: 25, link: 'https://pag.ae/7Yp3AdUxL' },
    { id: 26, link: 'https://pag.ae/7Yp3BrgX3' },
    { id: 27, link: 'https://pag.ae/7Yp3CsxHL' },
    { id: 28, link: 'https://pag.ae/7Yp3Dfdpp' },
    { id: 29, link: 'https://pag.ae/7Yp3EignN' },
    { id: 30, link: 'https://pag.ae/7Yp3FfiVs' },
  ]

  function componentDidMount() {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    componentDidMount()
  }, [])

  useEffect(() => {
    axios
      .get(`http://localhost:8000/listarProduto/${idDoProduto}`)
      .then((response) => {
        console.log(response.data, 'QUE MOMENTOOOO!!')
      })
  }, [])

  const navigate = useNavigate()

  return (
    <div className="main-container">
      <Header />
      <div className="cont1">
        <div className="cont2">
          <div className="row">
            <div className="col">
              <div className="img-1">
                <br />
                <div>
                  <img
                    className="ImageProduct"
                    src={imagemProduto}
                    alt="Produtos"
                  ></img>
                  <br />
                  <br />
                  <h1 className="titleProduct">{nomeDoProduto}</h1>
                </div>
                <p></p>
              </div>
            </div>
            <div className="col">
              <br />
              <br />
              <div className="titlePreco">Preço:</div>
              <div className="mb">{'R$ ' + valorDoProduto}</div>
              <br />
              {/* <button className="btn" onClick={() => navigate('/homepage')}>
                <span className="text-btn">COMPRAR AGORA</span>
              </button> */}

              {/* Feito o ternario, para bater com o id da lista */}
              <a href={linksPagamentos[idDoProduto - 1].link} className="btn">
                <span className="text-btn">COMPRAR AGORA</span>
              </a>
              <br />

              <br />
            </div>
          </div>
          <div className="row">
            <div className="titleDescricao">Descrição do Produto</div>
            <div className="description-1">{descricaoDoProduto}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
