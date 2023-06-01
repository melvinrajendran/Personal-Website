import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import './CourseList.scss';

type Course = {
  name: string;
  code: string;
};

type CourseListProps = {
  items: Course[];
};

const CourseList = ({ items }: CourseListProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <CSSTransition in={inView} timeout={1000} classNames="course-list">
      <Row ref={ref} className={`${!inView && 'invisible'} p-4 justify-content-center`}>
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
      </Row>
    </CSSTransition>
  );
};

export default CourseList;
