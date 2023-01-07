import React, { ReactElement } from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.scss';

type ProjectCardProps = {
  imageURL: string;
  imageAlt: string;
  projectURL?: string;
  title: string;
  date: string;
  text: ReactElement;
  codeURL: string;
  technologies: ReactElement;
};

const ProjectCard = ({
  imageURL,
  imageAlt,
  projectURL,
  title,
  date,
  text,
  codeURL,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card className="project-card bg-white shadow">
      <Card.Img src={imageURL} alt={imageAlt} />
      <Card.Body className="pt-4">
        <Card.Title>
          {projectURL ? (
            <a href={projectURL} target="_blank" rel="noopener noreferrer" className="link-card">
              <h3 className="h5 d-inline">{title}</h3>
            </a>
          ) : (
            <h3 className="h5">{title}</h3>
          )}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <div className="align-text-bottom">
          <a href={codeURL} target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="project-icon btn fab fa-github fa-lg" />
          </a>
          <small className="text-muted float-end">{technologies}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
