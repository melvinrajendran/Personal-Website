import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Timeline.css';
import TimelineDescription from './TimelineDescription';
import TimelineItem from './TimelineItem';
import workExperiences from './workExperiences';

const Timeline = () => {
  let [clickedIndex, setClickedIndex] = useState(0);

  function getClickedIndex() {
    return clickedIndex;
  }

  function handleClick(id) {
    setClickedIndex(parseInt(id));
  }

  return (
    <Row className="align-items-center gy-4">
      <Col className="text-center" md={{ span: 4, offset: 0 }} lg={{ span: 3, offset: 1 }}>
        <ul className="timeline">
          {workExperiences.map((experience, index) => {
            return <TimelineItem key={index} id={index} getClickedIndex={getClickedIndex} handleClick={handleClick} name={experience.name} startToEndDate={experience.startToEndDate} />;
          })}
        </ul>
      </Col>
      <Col md={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <TimelineDescription key={clickedIndex} {...workExperiences[clickedIndex]} />
      </Col>
    </Row>
  );
};

export default Timeline;
