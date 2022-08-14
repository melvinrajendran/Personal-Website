import React from 'react';
import './TimelineItem.css';

type TimelineItemProps = {
  index: number,
  selectedIndex: number,
  setSelectedIndex: (id: number) => void,
  name: string,
  startToEndDate: string
};

const TimelineItem = ({
  index,
  selectedIndex,
  setSelectedIndex,
  name,
  startToEndDate
}: TimelineItemProps) => {
  const isSelected = selectedIndex === index;

  return (
    <li id={index.toString()} className={'timeline-item rounded ml-3 p-4 shadow ' + (isSelected && 'selected-item')} onSelect={() => setSelectedIndex(index)}>
      <div className="unclickable">
        <h2 className={'text-start h5 mb-0 ' + (isSelected && 'selected-text')}>{name}</h2>
        <div className={'small text-gray text-start mt-2 fw-bold ' + (isSelected && 'selected-subtext')}>
          <i className="fa fa-clock-o mr-1"></i> {startToEndDate}
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
