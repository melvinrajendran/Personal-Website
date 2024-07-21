import React, { ReactElement } from 'react';
import './TimelineDescription.scss';

type TimelineDescriptionProps = {
  jobTitle: string;
  name: string;
  startToEndDates: Array<string>;
  bullets: Array<Array<ReactElement | string>>;
};

const TimelineDescription = ({
  jobTitle,
  name,
  startToEndDates,
  bullets,
}: TimelineDescriptionProps) => {
  return (
    <div>
      <h3>
        <span className="h2 title-text">{`${jobTitle} @ `}</span>
        <span className="h2">{name}</span>
      </h3>
      {bullets.map((group, index) => {
        return (
          <div key={index}>
            <p className="h5 fw-normal my-3">{startToEndDates[index]}</p>
            <ul className="timeline-ul">
              {group.map((bullet, index) => {
                return <li key={index}>{bullet}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineDescription;
