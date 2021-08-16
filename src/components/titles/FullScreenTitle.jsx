import React from "react";
import "./FullScreenTitle.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function FullScreenTitle(props) {
  return (
    <Container fluid>
      <Container>
        <Row className="fs-title-container align-items-center">
          <Col lg className="text-center text-lg-start">
            <h1 className="display-1 mb-4 type-writer">{props.title}</h1>
            <p className="fs-3">{props.subtitle}</p>
          </Col>
          <Col lg className="d-flex justify-content-center">
            <Image className="rounded-corners border-purple" fluid width="550" height="550" src={props.imageSrc} alt={props.imageAlt} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FullScreenTitle;
