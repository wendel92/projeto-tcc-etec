import "./style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Coluna 1 */}
          <div className="col">
            <h5>Endereço</h5>
            <ul className="list-unstyled">
              <li>Av. Cacilda, 137</li>
              <li>06322-000</li>
              <li>Carapicuiba, SP</li>
            </ul>
          </div>
          {/* Coluna 2 */}
          <div className="col">
            <h5>Contatos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="(11)3659-8524">
                  <BsTelephone />(11) 3659-8524
                </a>
              </li>
              <li>
                <a href="asiluminadas@gmail.com">
                  <MdOutlineAlternateEmail /> asiluminadas@gmail.com
                </a>
              </li>
            </ul>
          </div>
          {/* Coluna 3 */}
          <div className="col">
            <h5>Pagamentos</h5>
              <FontAwesomeIcon icon={faBarcode} className="icons"/>
              <FontAwesomeIcon icon={faPix} className="icons"/>
              <FontAwesomeIcon icon={faCreditCard} className="icons"/>
          </div>
          {/* Coluna 4 */}
          <div className="col">
            <h5>Redes Socias</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/atelieasiluminadas/">
                  <BsInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <FaFacebookSquare /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
