import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../common/Heading";
import technologies from "./technologies";
import TechnologiesList from "./TechnologiesList";

function Technologies() {
  return (
    <Container className="p-4">
      <Heading text="// technologies" />
      <Row className="p-4">
        {technologies.map((list, index) => {
          return (
            <Col key={index} xs={{ span: 8, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 4, offset: 2 - index }}>
              <TechnologiesList list={list} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Technologies;
