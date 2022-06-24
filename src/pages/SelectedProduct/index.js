import './style.css'

import React from 'react'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import Card from '../../componentes/Card'
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
  const linkPagamento = location.state.link

  console.log(idDoProduto)

  const linksPagamentos = Object(
    { id: 1, link: 'https://pag.ae/7YoWCRwg4' },
    { id: 2, link: '/homepage' },
    { id: 3, link: '/homepage' },
    { id: 4, link: '/homepage' },
    { id: 5, link: '/homepage' },
    { id: 6, link: '/homepage' }
  )

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
              <a
                href={
                  idDoProduto == linksPagamentos.id
                    ? linksPagamentos.link
                    : '/homepage'
                }
                className="btn"
              >
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
