import React from 'react';
import './FullScreenTitle.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

type FullScreenTitleProps = {
  title: string,
  subtitle: string
  imageSrc: string,
  imageAlt: string
}

const FullScreenTitle = ({ title, subtitle, imageSrc, imageAlt }: FullScreenTitleProps) => {
  return (
    <Container fluid className="p-4">
      <Container>
        <Row className="fs-title-container align-items-center">
          <Col lg={7} className="text-center text-lg-start py-5">
            <h1 className="display-1 mb-4">
              <Typewriter
                options={{
                  strings: title.toLowerCase(),
                  autoStart: true
                }}
              />
            </h1>
            <p className="fs-3">{subtitle}</p>
          </Col>
          <Col lg={5} className="d-flex justify-content-center">
            <Image className="rounded-corners border-purple shadow" fluid width="550" height="500" src={imageSrc} alt={imageAlt} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FullScreenTitle;
