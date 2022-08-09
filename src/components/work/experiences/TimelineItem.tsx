import React from 'react';
import './TimelineItem.css';

export type TimelineItemProps = {
  id: number,
  getClickedIndex: () => number,
  handleClick: (id: number) => void,
  name: string,
  startToEndDate: string
};

const TimelineItem = ({
  getClickedIndex,
  handleClick,
  name,
  id,
  startToEndDate
}: TimelineItemProps) => {
  const isClicked = getClickedIndex() === id;

  return (
    <div>
      <li id={id.toString()} className={'timeline-item rounded ml-3 p-4 shadow ' + (isClicked && 'selected-item')} onClick={() => handleClick(id)}>
        <div className="unclickable">
          <h2 className={'text-start h5 mb-0 ' + (isClicked && 'selected-text')}>{name}</h2>
          <div className={'small text-gray text-start mt-2 fw-bold ' + (isClicked && 'selected-subtext')}>
            <i className="fa fa-clock-o mr-1" /> {startToEndDate}
          </div>
        </div>
      </li>
    </div>
  );
};

export default TimelineItem;
