import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../logo.svg";

export default class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React News API
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
