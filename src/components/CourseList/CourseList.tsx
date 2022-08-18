import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './CourseList.scss';

type Course = {
  name: string,
  code: string
};

type CourseListProps = {
  items: Course[]
};

const CourseList = ({
  items
}: CourseListProps) => {
  return <Row className="p-4 justify-content-center">
    <Col>
      <ul className="h2 fw-normal coursework-list text-center">
        {items.map((course, index) => {
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
  </Row>;
};

export default CourseList;