import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Theme from "../Theme/index";
import Language from "../Language/index.";
import { AiFillHeart } from "react-icons/ai";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbarBody">
        <Container>
          <Navbar.Brand href="/" className="Brand">
            Cinephiles
          </Navbar.Brand>
          <Language />

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="#">
              <AiFillHeart className="heartHeader" />
            </Nav.Link>
          </Nav>

          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="#">
              <Link to={`/wish-list`} style={{textDecoration:"none"}}>
                <AiFillHeart className="heartHeader" />
                {/* Display the number of wishlist items */}
                {wishlistItems.length > 0 && (
                  <p className="wishlistCount">{wishlistItems.length}</p>
                )}
              </Link>
            </Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
        <Theme />
      </Navbar>
    </>
  );
}
