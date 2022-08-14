import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Timeline.css';
import TimelineDescription from './TimelineDescription';
import TimelineItem from './TimelineItem';
import workExperiences from './workExperiences';

const Timeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Row className="align-items-center gy-4">
      <Col
        className="text-center"
        md={{ span: 4, offset: 0 }}
        lg={{ span: 3, offset: 1 }}
      >
        <ul className="timeline">
          {workExperiences.map((experience, index) => {
            const { name, startToEndDate } = experience;
            
            return <TimelineItem
              key={index}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              name={name}
              startToEndDate={startToEndDate}
            />;
          })}
        </ul>
      </Col>
      <Col
        md={{ span: 7, offset: 1 }}
        lg={{ span: 6, offset: 1 }}
      >
        <TimelineDescription
          key={selectedIndex}
          {...workExperiences[selectedIndex]}
        />
      </Col>
    </Row>
  );
};

export default Timeline;
