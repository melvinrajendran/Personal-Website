import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import Heading from "./Heading";
import aboutMe from "../aboutme";

function AboutMe() {
  return (
    <Container className="py-4">
      <Heading text="// about me" />

      {aboutMe.map((item, index) => {
        return (
          <Row className="align-items-md-stretch">
            <Col lg className={"mb-4 align-self-center " + (index % 2 === 0 ? "order-lg-1" : "order-lg-2")}>
              <div class="p-4 text-center">
                <p class="h2 fw-normal">{item.text}</p>
              </div>
            </Col>
            <Col lg className={"mb-4 align-self-center text-center " + (index % 2 === 0 ? "order-lg-2" : "order-lg-1")}>
              <span class="about-icon">
                <i class={item.iconClass}></i>
              </span>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default AboutMe;
