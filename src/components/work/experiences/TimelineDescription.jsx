import React from "react";
import "./TimelineDescription.css";

function TimelineDescription(props) {
  return (
    <div>
      <h2>
        <span className="title-text">{props.jobTitle + " @ "}</span>
        {props.name}
      </h2>
      <p className="h5 fw-normal mb-3">
        <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
      </p>
      <ul className="timeline-ul">
        {props.bullets.map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
}

export default TimelineDescription;
