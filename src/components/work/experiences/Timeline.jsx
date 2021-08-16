import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Timeline.css";
import workExperiences from "./workExperiences";

function Timeline() {
  let [clickedIndex, setClickedIndex] = useState(0);

  function handleClick(event) {
    setClickedIndex(parseInt(event.target.id));
  }

  return (
    <Row className="align-items-center gy-4">
      <Col className="text-center" md={{ span: 4, offset: 0 }} lg={{ span: 3, offset: 1 }}>
        <ul className="timeline">
          <li id="0" className={"timeline-item rounded ml-3 p-4 shadow " + (clickedIndex === 0 && "selected-item")} onClick={handleClick}>
            <div className="unclickable">
              <h2 className={"text-start h5 mb-0 " + (clickedIndex === 0 && "selected-text")}>Code Ninjas</h2>
              <div className={"small text-gray text-start mt-2 fw-bold " + (clickedIndex === 0 && "selected-subtext")}>
                <i className="fa fa-clock-o mr-1"></i> NOV 19 - AUG 21
              </div>
            </div>
          </li>
          <li id="1" className={"timeline-item rounded ml-3 p-4 shadow " + (clickedIndex === 1 && "selected-item")} onClick={handleClick}>
            <div className="unclickable">
              <h2 className={"text-start h5 mb-0 " + (clickedIndex === 1 && "selected-text")}>X-STEM Club</h2>
              <div className={"small text-gray text-start mt-2 fw-bold " + (clickedIndex === 1 && "selected-subtext")}>
                <i className="fa fa-clock-o mr-1"></i> SEP 20 - JUN 21
              </div>
            </div>
          </li>
          <li id="2" className={"timeline-item rounded ml-3 p-4 shadow " + (clickedIndex === 2 && "selected-item")} onClick={handleClick}>
            <div className="unclickable">
              <h2 className={"text-start h5 mb-0 " + (clickedIndex === 2 && "selected-text")}>Peer Leadership Program</h2>
              <div className={"small text-gray text-start mt-2 fw-bold " + (clickedIndex === 2 && "selected-subtext")}>
                <i className="fa fa-clock-o mr-1"></i> SEP 20 - JUN 21
              </div>
            </div>
          </li>
        </ul>
      </Col>
      <Col md={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <div>
          <h2>
            <span className="title-text">{workExperiences[clickedIndex].jobTitle + " @ "}</span>
            {workExperiences[clickedIndex].name}
          </h2>
          <p className="h5 fw-normal mb-3">
            <i className="fa fa-clock-o mr-1"></i> {workExperiences[clickedIndex].startToEndDate}
          </p>
          <ul className="timeline-ul">
            {workExperiences[clickedIndex].bullets.map((bullet) => {
              return <li>{bullet}</li>;
            })}
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Timeline;
