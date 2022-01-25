import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutMe.css";
import { useInView } from "react-intersection-observer";
import Anime from "react-anime";

const AboutMeItem = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true
  });

  let fadeIn = {
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <Row className="align-items-md-stretch" ref={ref}>
      <Col lg className={"mb-4 align-self-center text-center " + (props.id % 2 === 0 ? "order-lg-1" : "order-lg-2")}>
        <div className="p-4">
          {inView ? (
            <Anime {...fadeIn} translateX={props.id % 2 === 0 ? [-75, 0] : [75, 0]}>
              <p className="h2 fw-normal">{props.text}</p>
            </Anime>
          ) : (
            <p className="h2 fw-normal invisible">{props.text}</p>
          )}
        </div>
      </Col>
      <Col lg className={"mb-4 align-self-center text-center " + (props.id % 2 === 0 ? "order-lg-2" : "order-lg-1")}>
        <div className="about-icon">
          <i className={props.iconClass}></i>
        </div>
      </Col>
    </Row>
  );
};

export default AboutMeItem;
