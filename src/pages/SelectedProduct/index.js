import "./style.css";
import vela from "./vela_decoupage.jpg"
import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Card from "../../componentes/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Img } from "react-image";

export default function SelectedProduct() {
  return (
    <div className="main-container">
      <Header />
      <div className="cont1">
        <div className="cont2">
          <div className="row">
            <div className="col">
              <div className="img">
                <Img src={vela} className="img"></Img>
              </div>    
            </div>
            <div className="col">
                <br/>
                <br/>   
                <h2 className="mb mt">Vela Aromática - (5500)</h2>
                <h3 className="mb">2 Disponíveis</h3>
                <h3 className="mb">R$ 00,00</h3>
                <br/>
                <Button className="btn">Comprar Agora</Button>
                <Button className="btn">Adicionar ao Carrinho</Button>
            </div>
            <h4>Descrição</h4>
            <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</text>
          </div>
          <div className="row">
            <div className="col">
              <h4 className="txt-prodSem">Produtos Semelhantes</h4>
            </div>
            <div className="home-page">
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
