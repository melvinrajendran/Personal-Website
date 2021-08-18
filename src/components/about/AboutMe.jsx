import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import Heading from "../common/Heading";
import aboutMe from "./aboutMe.js";

function AboutMe() {
  return (
    <Container className="p-4">
      <Heading text="// about me" />

      {aboutMe.map((item, index) => {
        return (
          <Row key={index} className="align-items-md-stretch">
            <Col lg className={"mb-4 align-self-center " + (index % 2 === 0 ? "order-lg-1" : "order-lg-2")}>
              <div className="p-4 text-center">
                <p className="h2 fw-normal">{item.text}</p>
              </div>
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