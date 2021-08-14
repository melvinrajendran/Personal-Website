import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container className="py-4">
      <footer class="pt-3 mt-4 border-top">
        <Row className="my-4 justify-content-center">
          <Col xs={2} lg={1} className="d-flex justify-content-center">
            <a href="mailto:melvin.rajendran@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="social-icon btn fas fa-envelope fa-lg"></i>
            </a>
          </Col>
          <Col xs={2} lg={1} className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/melvinrajendran/">
              <i class="social-icon btn fab fa-linkedin-in fa-lg"></i>
            </a>
          </Col>
          <Col xs={2} lg={1} className="d-flex justify-content-center">
            <a href="https://www.instagram.com/melvnraj/">
              <i class="social-icon btn fab fa-instagram fa-lg"></i>
            </a>
          </Col>
          <Col xs={2} lg={1} className="d-flex justify-content-center">
            <a href="https://github.com/melvinrajendran">
              <i class="social-icon btn fab fa-github fa-lg"></i>
            </a>
          </Col>
        </Row>

        <p class="text-muted text-center">&copy; 2021 Melvin Rajendran</p>
      </footer>
    </Container>
  );
}

export default Footer;
