import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Title(props) {
  return (
    <Container className="title-container py-lg-4">
      <Row className="align-items-center justify-content-center"></Row>
      <Col md={{ span: 6, offset: 3 }} className="p-5">
        <h1 class="display-1 mb-4 text-center">{props.title}</h1>
        <p class="fs-3 text-center">{props.subtitle}</p>
      </Col>
    </Container>
  );
}

export default Title;
