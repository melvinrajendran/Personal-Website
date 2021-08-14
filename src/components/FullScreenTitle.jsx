import React from "react";
import "./FullScreenTitle.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function FullScreenTitle(props) {
  return (
    <Container fluid>
      <Container>
        <Row className="fs-title-container align-items-center">
          <Col lg className="mb-4 mb-lg-0">
            <h1 className="display-1 fst-italic mb-4">{props.title}</h1>
            <p className="fs-4">{props.subtitle}</p>
          </Col>
          <Col lg className="d-flex justify-content-center">
            <Image className="rounded-corners" fluid width="550" height="550" src={props.imageSrc} alt={props.imageAlt} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FullScreenTitle;
