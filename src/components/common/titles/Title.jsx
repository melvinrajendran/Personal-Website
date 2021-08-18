import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Anime from "react-anime";

function Title(props) {
  let fadeInFromBottom = {
    translateY: [75, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <Container className="p-4">
      <Row className="align-items-center justify-content-center"></Row>
      <Col md={{ span: 6, offset: 3 }} className="p-5">
        <Anime {...fadeInFromBottom}>
          <h1 className="display-1 mb-4 text-center">{props.title}</h1>
        </Anime>
        <Anime delay={1000} {...fadeInFromBottom}>
          <p className="fs-3 text-center">{props.subtitle}</p>
        </Anime>
      </Col>
    </Container>
  );
}

export default Title;
