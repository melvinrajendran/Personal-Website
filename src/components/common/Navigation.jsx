import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Navigation.css";

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
              <NavDropdown.Item href="mailto:melvin.rajendran@gmail.com" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center">
                <i className="btn fas fa-envelope fa-lg social-icon"></i>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/melvinrajendran/" className="d-flex justify-content-center">
                <i className="btn fab fa-linkedin-in fa-lg social-icon"></i>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/melvnraj/" className="d-flex justify-content-center">
                <i className="btn fab fa-instagram fa-lg social-icon"></i>
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/melvinrajendran" className="d-flex justify-content-center">
                <i className="btn fab fa-github fa-lg social-icon"></i>
              </NavDropdown.Item>
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
