import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Section from '../../common/Section';
import courses from './courses';
import './Coursework.scss';

const Coursework = () => {
  return (
    <Section title="coursework">
      <Row className="p-4 justify-content-center">
        <Col>
          <ul className="h2 fw-normal coursework-list text-center">
            {courses.map((course, index) => {
              const { code, name } = course;

              return (
                <li key={index} className="py-3">
                  <h3 className="course-name">{name}</h3>
                  <p className="h6 fw-normal course-code">{code}</p>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Section>
  );
};

export default Coursework;
