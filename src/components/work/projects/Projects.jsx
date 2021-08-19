import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import projects from "./projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Container className="p-4">
      <Heading text="// projects" />

      <Row className="g-4 pt-4">
        {projects.map((project, index) => {
          return (
            <Col className="d-flex justify-content-center" key={index}>
              <ProjectCard {...project} id={index} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
