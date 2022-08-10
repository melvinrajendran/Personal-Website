import React from 'react';
import { Row, Col } from 'react-bootstrap';
import projectCards from './projectCards';
import ProjectCard from './ProjectCard';
import Section from '../../common/Section';

const Projects = () => {
  return (
    <Section title="projects">
      <Row className="g-4 py-4">
        {projectCards.map((project, index) => {
          return (
            <Col className="d-flex justify-content-center" key={index}>
              <ProjectCard {...project} />
            </Col>
          );
        })}
      </Row>
    </Section>
  );
};

export default Projects;
