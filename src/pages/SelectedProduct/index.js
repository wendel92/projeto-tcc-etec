import "./style.css";
import vela from "./vela_decoupage.jpg";
import React, { useEffect } from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import Card from "../../componentes/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/products.service";
import { getAllImages } from "../../services/images.services";

export default function SelectedProduct() {
  const [cards, setCards] = React.useState([]);
  const [imagens, setImagens] = React.useState([]);

  const consultarCards = async () => {
    const response = await getAllProducts();
    const lista = [];

    response.map((card) => {
      lista.push(card);
    });
    setCards(lista);
  };

  const consultarImages = async () => {
    const response = await getAllImages();
    const lista = [];

    response.map((imagem) => {
      lista.push(imagem);
    });
    setImagens(lista);
  };

  useEffect(() => {
    consultarCards();
    // consultarImagens()
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="cont1">
        <div className="cont2">
          <img src={vela} className="img-princ" sizes='(max-width: 799px) 100vw, (min-width: 800px) 800px'
></img>
          <div className="prod-info">
            <div className="row-prod-info">
              <div className="col-prod-info">
                <h2>Vela Aromática - (5500)</h2>
                <h3>2 Disponíveis</h3>
                <h3>R$ 00,00</h3>
                <br />
                <Button className="btn">Comprar Agora</Button>
                <Button className="btn">Adicionar ao Carrinho</Button>
              </div>
            </div>
          </div>
          <div className="row-prod-detal">
            <div className="col-prod-detal">
              <h4>Descrição</h4>
              <text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </text>
            </div>
          </div>
          <h4 className="txt-prodSem">Produtos Semelhantes</h4>
          <div className="row-prod-sem">
            <div className="home-page">
              {cards &&
                cards.map((item, index) => (
                  <Card
                    imagem={item.image}
                    nome={item.name_product}
                    preco={item.price_product}
                    id={item.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
