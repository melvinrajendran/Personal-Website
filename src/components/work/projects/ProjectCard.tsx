import React, { ReactElement } from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.scss';

type ProjectCardProps = {
  imageURL: string,
  imageAlt: string,
  title: string,
  date: string,
  text: ReactElement,
  projectURL: string,
  technologies: ReactElement
};

const ProjectCard = ({
  imageURL,
  imageAlt,
  title,
  date,
  text,
  projectURL,
  technologies
}: ProjectCardProps) => {
  return (
    <Card className="project-card bg-white shadow">
      <Card.Img src={imageURL} alt={imageAlt} />
      <Card.Body className="pt-4">
        <Card.Title>
          <h3 className="h5">{title}</h3>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        <div className="align-text-bottom">
          <a href={projectURL} target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="project-icon btn fab fa-github fa-lg" />
          </a>
          <small className="text-muted float-end">{technologies}</small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
