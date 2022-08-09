import React from 'react';
import { Col, Row } from 'react-bootstrap';
import technologyListItems from './technologyListItems';

const TechnologyList = () => {
  const numItems = technologyListItems.length;
  const midIndex = numItems % 2 === 0 ? numItems / 2 : numItems / 2 + 1;

  return (
    <Row className="p-4">
      {[0, 1].map((index) => {
        const startIndex = index === 0 ? 0 : midIndex;
        const endIndex = index === 0 ? midIndex : numItems;

        return (
          <Col
            key={index}
            xs={{ span: 8, offset: 2 }}
            md={{ span: 8, offset: 3 }}
            lg={{ span: 4, offset: 2 - index }}
          >
            <ul className="h2 fw-normal">
              {technologyListItems.slice(startIndex, endIndex).map((technology, index) => {
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
  );
};

export default TechnologyList;
