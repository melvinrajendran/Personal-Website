import React from "react";
import { Card } from "react-bootstrap";
import "./ProjectCard.css";
import { useInView } from "react-intersection-observer";
import Anime from "react-anime";

function ProjectCard(props) {
  const { ref, inView } = useInView({
    threshold: 0.85,
    triggerOnce: true
  });

  let fadeInManyFromBottom = {
    translateY: [75, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: "easeOutCubic",
    delay: props.id * 500
  };

  return (
    <div ref={ref}>
      {inView ? (
        <Anime {...fadeInManyFromBottom}>
          <Card className="project-card bg-white shadow">
            <Card.Img src={props.imageURL} alt={props.imageAlt} />
            <Card.Body className="pt-4">
              <Card.Title>
                <h5>{props.title}</h5>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
              <Card.Text>{props.text}</Card.Text>
              <div className="align-text-bottom">
                <a href={props.projectURL}>
                  <i className="project-icon btn fab fa-github fa-lg" />
                </a>
                <small className="text-muted float-end">{props.technologies}</small>
              </div>
            </Card.Body>
          </Card>
        </Anime>
      ) : (
        <Card className="project-card invisible" />
      )}
    </div>
  );
}

export default ProjectCard;
