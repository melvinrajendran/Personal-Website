import React, { ReactElement, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Timeline.scss';
import TimelineDescription from '../TimelineDescription/TimelineDescription';
import TimelineItem from '../TimelineItem/TimelineItem';

type TimelineItem = {
  name: string;
  jobTitle: string;
  startToEndDate: string;
  bullets: Array<string | ReactElement>;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline = ({ items }: TimelineProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Row className="align-items-center gy-4 my-1">
      <Col
        className="text-center"
        md={{ span: 4, offset: 0 }}
        lg={{ span: 3, offset: 0 }}
        xl={{ span: 3, offset: 1 }}
      >
        <ul className="timeline">
          {items.map((experience, index) => {
            const { name, startToEndDate } = experience;

            return (
              <TimelineItem
                key={index}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                name={name}
                startToEndDate={startToEndDate}
              />
            );
          })}
        </ul>
      </Col>
      <Col md={{ span: 6, offset: 2 }} lg={{ span: 7, offset: 2 }} xl={{ span: 6, offset: 1 }}>
        <TimelineDescription key={selectedIndex} {...items[selectedIndex]} />
      </Col>
    </Row>
  );
};

export default Timeline;
