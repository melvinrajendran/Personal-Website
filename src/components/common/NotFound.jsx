import React from "react";
import "./NotFound.css";
import { Col, Container, Row } from "react-bootstrap";

function NotFound() {
  return (
    <Container fluid className="p-4">
      <Container>
        <Row className="not-found-container align-items-center">
          <Col className="text-center py-5">
            <h1 className="display-1 mb-4">404!</h1>
            <p className="fs-3">The page you're looking for doesn't exist.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NotFound;
