import React, { ReactElement } from 'react';
import './TimelineDescription.scss';

type TimelineDescriptionProps = {
  jobTitle: string,
  name: string,
  startToEndDate: string,
  bullets: Array<ReactElement | string>
}

const TimelineDescription = ({
  jobTitle,
  name,
  startToEndDate,
  bullets
}: TimelineDescriptionProps) => {
  return (
    <>
      <h2>
        <span className="title-text">{`${jobTitle} @ `}</span>
        {name}
      </h2>
      <p className="h5 fw-normal mb-3">
        <i className="fa fa-clock-o mr-1" /> {startToEndDate}
      </p>
      <ul className="timeline-ul">
        {bullets.map((bullet, index) => {
          return (
            <li key={index}>
              {bullet}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TimelineDescription;
