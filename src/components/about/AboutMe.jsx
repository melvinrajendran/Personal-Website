import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import Heading from "../common/Heading";
import aboutMe from "./aboutMe.js";
import Anime from "react-anime";

function AboutMe() {
  return (
    <Container className="p-4">
      <Heading text="// about me" />

      {aboutMe.map((item, index) => {
        let fadeIn = {
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutCubic"
        };

        return (
          <Row key={index} className="align-items-md-stretch">
            <Col lg className={"mb-4 align-self-center " + (index % 2 === 0 ? "order-lg-1" : "order-lg-2")}>
              <Anime {...fadeIn} translateX={index % 2 === 0 ? [-75, 0] : [75, 0]}>
                <div className="p-4 text-center">
                  <p className="h2 fw-normal">{item.text}</p>
                </div>
              </Anime>
            </Col>
            <Col lg className={"mb-4 align-self-center text-center " + (index % 2 === 0 ? "order-lg-2" : "order-lg-1")}>
              <div className="about-icon">
                <i className={item.iconClass}></i>
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default AboutMe;
