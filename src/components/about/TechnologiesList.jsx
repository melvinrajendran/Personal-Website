import React from "react";
import Anime from "react-anime";
import { useInView } from "react-intersection-observer";

const TechnologiesList = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true
  });

  let fadeInFromBottom = {
    translateY: [75, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <ul className="h2 fw-normal" ref={ref}>
      {props.list.map((technology, index) => {
        return (
          <>
            {inView ? (
              <Anime {...fadeInFromBottom} delay={index * 250}>
                <li key={index}>
                  <p>{technology}</p>
                </li>
              </Anime>
            ) : (
              <li key={index} className="invisible">
                <p>{technology}</p>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
