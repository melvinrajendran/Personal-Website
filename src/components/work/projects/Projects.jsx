import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import projects from "./projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Container className="py-4">
      <Heading text="// projects" />
      <Row className="g-4 pt-4">
        {projects.map((project, index) => {
          return (
            <Col className="d-flex justify-content-center" key={index}>
              <ProjectCard imageURL={project.imageURL} imageAlt={project.imageAlt} title={project.title} date={project.date} text={project.text} projectURL={project.projectURL} technologies={project.technologies} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
