import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Timeline.css";

function Timeline() {
  return (
    <Row className="align-items-center gy-4">
      <Col className="text-center" md={{ span: 4, offset: 0 }} lg={{ span: 3, offset: 1 }}>
        <ul class="timeline">
          <li class="timeline-item selected-item rounded ml-3 p-4 shadow">
            <h2 class="text-start h5 mb-0 selected-text">Code Ninjas</h2>
            <div class="small text-gray text-start mt-2 selected-subtext fw-bold">
              <i class="fa fa-clock-o mr-1"></i> NOV 19 - AUG 21
            </div>
          </li>
          <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
            <h2 class="text-start h5 mb-0">X-STEM Club</h2>
            <div class="small text-gray text-start mt-2 fw-bold">
              <i class="fa fa-clock-o mr-1"></i> SEP 20 - JUN 21
            </div>
          </li>
          <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
            <h2 class="text-start h5 mb-0">Peer Leadership Program</h2>
            <div class="small text-gray text-start mt-2 fw-bold">
              <i class="fa fa-clock-o mr-1"></i> SEP 20 - JUN 21
            </div>
          </li>
        </ul>
      </Col>
      <Col md={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }}>
        <div className="">
          <h2>
            <span className="title-text">Programming Tutor @</span> Code Ninjas
          </h2>
          <p className="h5 fw-normal mb-3">
            <i class="fa fa-clock-o mr-1"></i> NOV 19 - AUG 21
          </p>
          <ul className="timeline-ul">
            <li>Taught children ages 7 to 14 fundamental programming concepts in the context of game development</li>
            <li>Organized and ran annual hackathon</li>
            <li>Conducted machine learning workshops in which students gained exposure to sentiment analysis and supervised learning</li>
            <li>Directed 2-month summer camps on Web Development, Python, and JavaScript</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Timeline;
