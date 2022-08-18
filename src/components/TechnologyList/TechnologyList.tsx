import React from 'react';
import { Col, Row } from 'react-bootstrap';

type TechnologyListProps = {
  items: string[]
};

const TechnologyList = ({
  items
}: TechnologyListProps) => {
  const numItems = items.length;
  const midIndex = numItems % 2 === 0 ? numItems / 2 : numItems / 2 + 1;

  return (
    <Row className="p-4 justify-content-center">
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
  );
};

export default TechnologyList;
