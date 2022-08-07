import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutMeItem.css';
import PropTypes from 'prop-types';

const AboutMeItem = ({ key, text, iconClass }) => {
  const hasEvenKey = key % 2 === 0;

  return (
    <Row className="align-items-md-stretch">
      <Col
        lg
        className={`mb-4 align-self-center text-center ${hasEvenKey ? 'order-lg-1': 'order-lg-2'}`}
      >
        <div className="p-4">
          <p className="h2 fw-normal">{text}</p>
        </div>
      </Col>
      <Col
        lg
        className={`mb-4 align-self-center text-center ${hasEvenKey ? 'order-lg-2': 'order-lg-1'}`}
      >
        <div className="about-icon">
          <i className={iconClass} />
        </div>
      </Col>
    </Row>
  );
};

AboutMeItem.propTypes = {
  key: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
};

export default AboutMeItem;
