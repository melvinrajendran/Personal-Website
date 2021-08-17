import React from "react";
import "./FullScreenTitle.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Anime from "react-anime";
import Typewriter from "typewriter-effect";

function FullScreenTitle(props) {
  let fadeInProps = {
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <Container fluid className="p-4">
      <Container>
        <Row className="fs-title-container align-items-center">
          <Col lg={7} className="text-center text-lg-start py-5">
            <h1 className="display-1 mb-4">
              <Typewriter
                options={{
                  strings: props.title,
                  autoStart: true
                }}
              />
            </h1>
            <Anime delay={3000} {...fadeInProps}>
              <p className="fs-3">{props.subtitle}</p>
            </Anime>
          </Col>
          <Col lg={5} className="d-flex justify-content-center">
            <Anime {...fadeInProps}>
              <Image className="rounded-corners border-purple shadow" fluid width="550" height="500" src={props.imageSrc} alt={props.imageAlt} />
            </Anime>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FullScreenTitle;
