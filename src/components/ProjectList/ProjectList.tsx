import React, { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

type Project = {
  imageURL: string;
  imageAlt: string;
  title: string;
  date: string;
  text: ReactElement;
  codeURL: string;
  projectURL?: string;
  technologies: ReactElement;
};

type ProjectListProps = {
  items: Project[];
};

const ProjectList = ({ items }: ProjectListProps) => {
  return (
    <Row className="g-4 py-4">
      {items.map((project, index) => {
        return (
          <Col className="d-flex justify-content-center py-2 py-xl-3" key={index}>
            <ProjectCard {...project} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectList;
