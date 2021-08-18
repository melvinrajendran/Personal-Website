import React from "react";
import Anime from "react-anime";
import "./TimelineDescription.css";

function TimelineDescription(props) {
  let fadeInFromBottom = {
    translateY: [75, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <div>
      <Anime {...fadeInFromBottom}>
        <h2>
          <span className="title-text">{props.jobTitle + " @ "}</span>
          {props.name}
        </h2>
        <p className="h5 fw-normal mb-3">
          <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
        </p>
      </Anime>

      <ul className="timeline-ul">
        {props.bullets.map((bullet, index) => {
          let fadeInManyFromBottom = {
            translateY: [75, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutCubic",
            delay: 1000 + index * 250
          };

          return (
            <Anime {...fadeInManyFromBottom}>
              <li key={index}>{bullet}</li>
            </Anime>
          );
        })}
      </ul>
    </div>
  );
}

export default TimelineDescription;
