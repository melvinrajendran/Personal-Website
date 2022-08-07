import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="project-card bg-white shadow">
        <Card.Img src={props.imageURL} alt={props.imageAlt} />
        <Card.Body className="pt-4">
          <Card.Title>
            <h5>{props.title}</h5>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
          <Card.Text>{props.text}</Card.Text>
          <div className="align-text-bottom">
            <a href={props.projectURL} target="_blank" rel="noopener noreferrer">
              <i className="project-icon btn fab fa-github fa-lg" />
            </a>
            <small className="text-muted float-end">{props.technologies}</small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
