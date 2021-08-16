import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function TimelineItem(props) {
  return (
    <li id={props.id} className={"timeline-item rounded ml-3 p-4 shadow " + (clickedIndex === 0 && "selected-item")} onClick={handleClick}>
      <h2 className={"text-start h5 mb-0 " + (clickedIndex === 0 && "selected-text")}>Code Ninjas</h2>
      <div className={"small text-gray text-start mt-2 fw-bold " + (clickedIndex === 0 && "selected-subtext")}>
        <i className="fa fa-clock-o mr-1"></i> NOV 19 - AUG 21
      </div>
    </li>
  );
}

export default TimelineItem;
