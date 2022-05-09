import './style.css'
import { ImCart } from 'react-icons/im'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


export default function Header() {
 

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
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/Register">
              Cadastre-se
            </Nav.Link>

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
