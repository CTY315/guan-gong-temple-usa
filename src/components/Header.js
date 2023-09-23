import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#cc7351" }} expand="lg">
          <Navbar.Brand href="/">美國關帝廟 Guan Gong Temple of</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/pics">Pictures 照片</Nav.Link>
              <Nav.Link href="/donation">Donation 捐款</Nav.Link>
              <Nav.Link href="/contact">Contact Us 連絡我們</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
