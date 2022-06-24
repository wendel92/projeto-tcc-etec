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
  return (
    // <div classname="div">
    <>
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

              <Nav.Link>
                <div className="cartIcon"></div>
              </Nav.Link>
              <div></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    //  </div>
  )
}
