import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import './TechnologyList.scss';

type TechnologyListProps = {
  items: string[];
};

const TechnologyList = ({ items }: TechnologyListProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const numItems = items.length;
  const midIndex = numItems % 2 === 0 ? numItems / 2 : numItems / 2 + 1;

  return (
    <CSSTransition in={inView} timeout={1000} classNames="technology-list">
      <Row ref={ref} className={`${!inView && 'invisible'} p-4 justify-content-center`}>
        {[0, 1].map((index) => {
          const startIndex = index === 0 ? 0 : midIndex;
          const endIndex = index === 0 ? midIndex : numItems;

          return (
            <Col
              key={index}
              xs={7}
              md={{ span: 6, offset: 1 }}
              lg={{ span: 4, offset: index === 0 ? 2 : 1 }}
            >
              <ul className="h2 fw-normal">
                {items.slice(startIndex, endIndex).map((technology, index) => {
                  return (
                    <li key={index}>
                      <p>{technology}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
          );
        })}
      </Row>
    </CSSTransition>
  );
};

export default TechnologyList;
