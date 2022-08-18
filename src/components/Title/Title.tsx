import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type TitleProps = {
  title: string,
  subtitle: string
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        <Col md={10} lg={7} className="p-5">
          <h1 className="display-2 mb-4 text-center">{title.toLowerCase()}</h1>
          <p className="fs-3 text-center">{subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
