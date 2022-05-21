import './style.css'
import { ImCart } from 'react-icons/im'
import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from 'react-bootstrap'

export default function Header() {
  //   const btnMobile = document.getElementById('btn-mobile');

  //   if (event.type === 'touchstart') event.preventDefault();
  //   const nav = document.getElementById('nav');
  //   nav.classList.toggle('active');
  //   const active = nav.classList.contains('active');
  //   event.currentTarget.setAttribute('aria-expanded', active);
  //   if (active) {
  //     event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  //   } else {
  //     event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  //   }

  //   btnMobile.addEventListener('click', toggleMenu);
  // btnMobile.addEventListener('touchstart', toggleMenu);

  return (
    // <div classname="div">
    <Navbar collapseOnSelect expand="lg" className="red" variant="dark">
      <Container>
        <Navbar.Brand href="/HomePage">
          <img
            className="Logo"
            src="./logosemfundo.png"
            alt=""
            width="auto"
            height="50px"
          />
        </Navbar.Brand>

        <Navbar.Toggle className="toggle" aria-controls="navbar-nav" />
        <Navbar.Collapse className="toggle" id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="link" href="#"></Nav.Link>
            <Nav.Link className="link" href="/Login">
              Login
            </Nav.Link>
            <Nav.Link className="link" eventKey={2} href="/Register">
              Cadastre-se
            </Nav.Link>
            {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="buttonSearch" variant="outline-success">Search</Button>
        </Form> */}

            <Nav.Link href="cart">
              <div className="cartIcon">
                <ImCart />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //  </div>
  )
}
