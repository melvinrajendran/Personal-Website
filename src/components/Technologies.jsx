import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";

function Technologies() {
  return (
    <Container className="py-4">
      <Heading text="// technologies" />
      <Row className="p-4">
        <Col xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 2 }}>
          <ul className="h2 fw-normal">
            <li>
              <p>Java</p>
            </li>
            <li>
              <p>JavaScript ES6+</p>
            </li>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>C#</p>
            </li>
          </ul>
        </Col>
        <Col xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 1 }}>
          <ul className="h2 fw-normal">
            <li>
              <p>React</p>
            </li>
            <li>
              <p>Node</p>
            </li>
            <li>
              <p>Express</p>
            </li>
            <li>
              <p>MongoDB</p>
            </li>
            <li>
              <p>SQL</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Technologies;
