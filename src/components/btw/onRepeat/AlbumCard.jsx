import React from "react";
import { Card } from "react-bootstrap";
import "./AlbumCard.css";
import Anime from "react-anime";
import { useInView } from "react-intersection-observer";

const AlbumCard = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
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
          <Card className="album-card">
            <a href={props.songURL} target="_blank" rel="noopener noreferrer">
              <Card.Img className="rounded shadow" variant="top" src={props.imageURL} alt={props.imageAlt} />
            </a>
            <Card.Body className="pt-4">
              <Card.Title>
                <h5>{props.albumTitle}</h5>
              </Card.Title>
              <Card.Text>{props.artist}</Card.Text>
            </Card.Body>
          </Card>
        </Anime>
      ) : (
        <Card className="album-card invisible">
          <a href={props.songURL} target="_blank" rel="noopener noreferrer">
            <Card.Img className="rounded shadow" variant="top" src={props.imageURL} alt={props.imageAlt} />
          </a>
          <Card.Body className="pt-4">
            <Card.Title>
              <h5>{props.albumTitle}</h5>
            </Card.Title>
            <Card.Text>{props.artist}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default AlbumCard;
