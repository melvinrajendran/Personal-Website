import React from "react";
import "./TimelineItem.css";
import { useInView } from "react-intersection-observer";
import Anime from "react-anime";

function TimelineItem(props) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true
  });

  let fadeInFromBottom = {
    translateY: [75, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic",
    delay: props.id * 500
  };

  const isClicked = props.getClickedIndex() === props.id;

  return (
    <div ref={ref}>
      {inView ? (
        <Anime {...fadeInFromBottom}>
          <li id={props.id} className={"timeline-item rounded ml-3 p-4 shadow " + (isClicked && "selected-item")} onClick={() => props.handleClick(props.id)}>
            <div className="unclickable">
              <h2 className={"text-start h5 mb-0 " + (isClicked && "selected-text")}>{props.name}</h2>
              <div className={"small text-gray text-start mt-2 fw-bold " + (isClicked && "selected-subtext")}>
                <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
              </div>
            </div>
          </li>
        </Anime>
      ) : (
        <li id={props.id} className={"timeline-item rounded ml-3 p-4 invisible unclickable"}>
          <h2 className={"text-start h5 mb-0"}>{props.name}</h2>
          <div className="small mt-2">
            <i className="fa fa-clock-o mr-1"></i> {props.startToEndDate}
          </div>
        </li>
      )}
    </div>
  );
}

export default TimelineItem;
