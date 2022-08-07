import React from 'react';
import './TimelineItem.css';

const TimelineItem = (props) => {
  const isClicked = props.getClickedIndex() === props.id;

  return (
    <div>
      <li id={props.id} className={'timeline-item rounded ml-3 p-4 shadow ' + (isClicked && 'selected-item')} onClick={() => props.handleClick(props.id)}>
        <div className="unclickable">
          <h2 className={'text-start h5 mb-0 ' + (isClicked && 'selected-text')}>{props.name}</h2>
          <div className={'small text-gray text-start mt-2 fw-bold ' + (isClicked && 'selected-subtext')}>
            <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
          </div>
        </div>
      </li>
    </div>
  );
};

export default TimelineItem;
