import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutMe.css";
import { useInView } from "react-intersection-observer";
import Anime from "react-anime";

function AboutMeItem(props) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  let fadeIn = {
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic"
  };

  return (
    <div ref={ref}>
      {inView ? (
        <Row key={props.id} className="align-items-md-stretch">
          <Col lg className={"mb-4 align-self-center " + (props.id % 2 === 0 ? "order-lg-1" : "order-lg-2")}>
            <Anime {...fadeIn} translateX={props.id % 2 === 0 ? [-75, 0] : [75, 0]}>
              <div className="p-4 text-center">
                <p className="h2 fw-normal">{props.text}</p>
              </div>
            </Anime>
          </Col>
          <Col lg className={"mb-4 align-self-center text-center " + (props.id % 2 === 0 ? "order-lg-2" : "order-lg-1")}>
            <div className="about-icon">
              <i className={props.iconClass}></i>
            </div>
          </Col>
        </Row>
      ) : (
        <Row key={props.id} className="align-items-md-stretch">
          <Col lg className={"mb-4 align-self-center invisible " + (props.id % 2 === 0 ? "order-lg-1" : "order-lg-2")}>
            <div className="p-4 text-center">
              <p className="h2 fw-normal">{props.text}</p>
            </div>
          </Col>
          <Col lg className={"mb-4 align-self-center text-center " + (props.id % 2 === 0 ? "order-lg-2" : "order-lg-1")}>
            <div className="about-icon">
              <i className={props.iconClass}></i>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AboutMeItem;
