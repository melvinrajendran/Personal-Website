import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutMeList.scss';

type AboutMeListItem = {
  text: string;
  iconClass: string;
};

type AboutMeListProps = {
  items: AboutMeListItem[];
};

const AboutMeList = ({ items }: AboutMeListProps) => {
  return (
    <>
      {items.map((item, index) => {
        const { text, iconClass } = item;
        const hasEvenIndex = index % 2 === 0;

        return (
          <Row key={index}>
            <Col lg className={`mb-4 text-center ${hasEvenIndex ? 'order-lg-1' : 'order-lg-2'}`}>
              <p className="p-4 h2 fw-normal">{text}</p>
            </Col>
            <Col lg className={`mb-4 text-center ${hasEvenIndex ? 'order-lg-2' : 'order-lg-1'}`}>
              <i className={`about-icon ${iconClass}`} />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default AboutMeList;
