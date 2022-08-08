import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutMeItem.css';

export type AboutMeItemProps = {
  key: number,
  text: string,
  iconClass: string
};

const AboutMeItem = ({ key, text, iconClass }: AboutMeItemProps) => {
  const hasEvenKey = key % 2 === 0;

  return (
    <Row className="align-items-md-stretch">
      <Col lg className={`mb-4 align-self-center text-center ${hasEvenKey ? 'order-lg-1': 'order-lg-2'}`}>
        <p className="p-4 h2 fw-normal">{text}</p>
      </Col>
      <Col lg className={`mb-4 align-self-center text-center ${hasEvenKey ? 'order-lg-2': 'order-lg-1'}`}>
        <i className={`about-icon ${iconClass}`} />
      </Col>
    </Row>
  );
};

export default AboutMeItem;
