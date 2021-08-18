import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Navigation.css";
import socials from "./socials";

function Navigation(props) {
  return (
    <Navbar fixed="top" bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={`mx-lg-5 ${props.location.pathname === "/" ? "active" : ""}`}>
              About
            </Nav.Link>
            <Nav.Link href="/work" className={`me-lg-5 ${props.location.pathname === "/work" ? "active" : ""}`}>
              Work
            </Nav.Link>
            <Nav.Link href="/btw" className={`me-lg-5 ${props.location.pathname === "/btw" ? "active" : ""}`}>
              BTW
            </Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              {socials.map((social, index) => {
                return (
                  <NavDropdown.Item key={index} href={social.href} target={social.target} rel={social.rel} className="d-flex justify-content-center">
                    <i className={"btn fa-lg social-icon " + social.iconClass}></i>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/" className="letter-icon position-fixed start-50 translate-middle">
          <span className="letter">M</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default withRouter(Navigation);
