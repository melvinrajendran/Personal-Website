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
      <h3>
        <span className="h2 title-text">{`${jobTitle} @ `}</span>
        <span className="h2">{name}</span>
      </h3>
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
