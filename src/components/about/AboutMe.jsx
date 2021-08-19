import React from "react";
import { Container } from "react-bootstrap";
import "./AboutMe.css";
import Heading from "../common/Heading";
import aboutMe from "./aboutMe.js";
import AboutMeItem from "./AboutMeItem";

function AboutMe() {
  return (
    <Container className="p-4">
      <Heading text="// about me" />

      {aboutMe.map((aboutMeItem, index) => {
        return <AboutMeItem key={index} id={index} {...aboutMeItem} />;
      })}
    </Container>
  );
}

export default AboutMe;
