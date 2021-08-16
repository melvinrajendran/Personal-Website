import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../../common/Heading";
import Timeline from "./Timeline";

function Experiences() {
  return (
    <Container className="py-4">
      <Heading text="// experiences" />
      <Timeline />
    </Container>
  );
}

export default Experiences;
