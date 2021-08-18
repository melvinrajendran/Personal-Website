import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
import Anime from "react-anime";

function Projects() {
  return (
    <Container className="p-4">
      <Heading text="// projects" />
      <Row className="g-4 pt-4">
        {projects.map((project, index) => {
          let fadeInManyFromBottom = {
            translateY: [75, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutCubic",
            delay: index * 500
          };

          return (
            <Col className="d-flex justify-content-center" key={index}>
              <Anime {...fadeInManyFromBottom}>
                <ProjectCard imageURL={project.imageURL} imageAlt={project.imageAlt} title={project.title} date={project.date} text={project.text} projectURL={project.projectURL} technologies={project.technologies} />
              </Anime>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
