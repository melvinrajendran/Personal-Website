import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../common/Heading";
import technologies from "./technologies.js";

function Technologies() {
  return (
    <Container className="p-4">
      <Heading text="// technologies" />
      <Row className="p-4">
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
    </Container>
  );
}

export default Technologies;
