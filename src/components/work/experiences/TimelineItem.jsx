import React from "react";
import "./TimelineItem.css";

function TimelineItem(props) {
  return (
    <li id={props.id} className={"timeline-item rounded ml-3 p-4 shadow " + (props.getClickedIndex() === props.id && "selected-item")} onClick={() => {
      props.handleClick(props.id);
    }}>
      <div className="unclickable">
        <h2 className={"text-start h5 mb-0 " + (props.getClickedIndex() === props.id && "selected-text")}>{props.name}</h2>
        <div className={"small text-gray text-start mt-2 fw-bold " + (props.getClickedIndex() === props.id && "selected-subtext")}>
          <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
        </div>
      </div>
    </li>
  );
}

export default TimelineItem;
