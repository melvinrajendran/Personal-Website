import React from 'react';
import './FullScreenTitle.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { CSSTransition } from 'react-transition-group';

type FullScreenTitleProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
};

const FullScreenTitle = ({ title, subtitle, imageSrc, imageAlt }: FullScreenTitleProps) => {
  return (
    <Container fluid className="p-4">
      <Row className="p-5 fs-title-container align-items-center">
        <Col xl={7} className="text-center text-xl-start pb-5 pt-xl-5">
          <h1 className="display-2 mb-4">
            <Typewriter options={{ strings: title.toLowerCase(), autoStart: true }} />
          </h1>
          <CSSTransition in appear timeout={4000} classNames="fs-subtitle">
            <p className="fs-3">{subtitle}</p>
          </CSSTransition>
        </Col>
        <Col xl={5} className="d-flex justify-content-center">
          <Image
            fluid
            className="rounded-corners border-purple shadow"
            width="550"
            height="550"
            src={imageSrc}
            alt={imageAlt}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FullScreenTitle;
