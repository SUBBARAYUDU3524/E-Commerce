import React from "react";
import { useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  Container,  
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = ({data,price}) => {
  
console.log(data)
  // const totalPrice = data.reduce((total, item) => total + item.price, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ minHeight: "70px" }}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="mr-auto fs-3">
          E-COMMERCE
        </Navbar.Brand>
        <Nav className="mx-auto">
          <NavLink
            to="/CartProducts"
            style={{ fontSize: "18px", marginRight: "10px" }}
            className="nav-link"
          >
            Cart Items: {data.length}
          </NavLink>
          <button
            style={{ fontSize: "18px", marginRight: "10px", color: "black" }}
            className="nav-link"
          >
            Total Price:{price}
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
