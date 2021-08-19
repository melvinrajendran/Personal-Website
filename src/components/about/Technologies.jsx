import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../common/Heading";
import technologies from "./technologies.js";
import Anime from "react-anime";
import { useInView } from "react-intersection-observer";

function Technologies() {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <Container className="p-4">
      <Heading text="// technologies" />
      <div ref={ref}>
        {inView ? (
          <Row className="p-4">
            <Col xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 2 }}>
              <ul className="h2 fw-normal">
                {technologies[0].map((technology, index) => {
                  let fadeInListFromBottom = {
                    translateY: [75, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: "easeOutCubic",
                    delay: index * 250
                  };

                  return (
                    <Anime {...fadeInListFromBottom}>
                      <li key={index}>
                        <p>{technology}</p>
                      </li>
                    </Anime>
                  );
                })}
              </ul>
            </Col>
            <Col xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 1 }}>
              <ul className="h2 fw-normal">
                {technologies[1].map((technology, index) => {
                  let fadeInListFromBottom = {
                    translateY: [75, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: "easeOutCubic",
                    delay: index * 250
                  };

                  return (
                    <Anime {...fadeInListFromBottom}>
                      <li key={index}>
                        <p>{technology}</p>
                      </li>
                    </Anime>
                  );
                })}
              </ul>
            </Col>
          </Row>
        ) : (
          <Row className="p-4 invisible">
            <Col xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 2 }}>
              <ul className="h2 fw-normal">
                {technologies[0].map((technology, index) => {
                  return (
                    <li key={index}>
                      <p>{technology}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 1 }}>
              <ul className="h2 fw-normal">
                {technologies[1].map((technology, index) => {
                  return (
                    <li key={index}>
                      <p>{technology}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
}

export default Technologies;
