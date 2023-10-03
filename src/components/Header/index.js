import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Theme from "../Theme/index";
import { AiFillHeart } from "react-icons/ai";
import './header.css'

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbarBody">
        <Container>
          <Navbar.Brand href="/" className="Brand">
            Cinephiles
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Nav.Link href="#">
                <AiFillHeart className="heartHeader" />
              </Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
        <Theme />
      </Navbar>
    </>
  );
}
