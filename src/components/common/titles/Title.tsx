import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Title = (props) => {
  return (
    <Container className="p-4">
      <Row className="align-items-center justify-content-center"></Row>
      <Col md={{ span: 6, offset: 3 }} className="p-5">
        <h1 className="display-1 mb-4 text-center">{props.title}</h1>
        <p className="fs-3 text-center">{props.subtitle}</p>
      </Col>
    </Container>
  );
};

export default Title;
