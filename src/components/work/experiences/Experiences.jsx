import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../common/Heading";
import Timeline from "./Timeline";

const Experiences = () => {
  return (
    <Container className="p-4">
      <Heading text="// experiences" />
      <Timeline />
    </Container>
  );
};

export default Experiences;
