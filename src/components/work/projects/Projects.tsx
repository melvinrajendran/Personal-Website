import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../../common/Heading';
import projectCards from './projectCards';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Container className="p-4">
      <Heading text="// projects" />

      <Row className="g-4 py-4">
        {projectCards.map((project, index) => {
          return (
            <Col className="d-flex justify-content-center" key={index}>
              <ProjectCard {...project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
