import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutMeItem.scss';

type AboutMeItemProps = {
  index: number,
  text: string,
  iconClass: string
};

const AboutMeItem = ({
  index,
  text,
  iconClass
}: AboutMeItemProps) => {
  const hasEvenIndex = index % 2 === 0;

  return (
    <Row className="">
      <Col lg className={`mb-4 text-center ${hasEvenIndex ? 'order-lg-1': 'order-lg-2'}`}>
        <p className="p-4 h2 fw-normal">{text}</p>
      </Col>
      <Col lg className={`mb-4 text-center ${hasEvenIndex ? 'order-lg-2': 'order-lg-1'}`}>
        <i className={`about-icon ${iconClass}`} />
      </Col>
    </Row>
  );
};

export default AboutMeItem;