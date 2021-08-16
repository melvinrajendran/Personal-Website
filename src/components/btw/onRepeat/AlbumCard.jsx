import React from "react";
import { Card } from "react-bootstrap";
import "./AlbumCard.css";

function AlbumCard(props) {
  return (
    <Card className="album-card">
      <a href={props.songURL}>
        <Card.Img className="rounded shadow" variant="top" src={props.imageURL} alt={props.imageAlt} />
      </a>
      <Card.Body className="pt-4">
        <Card.Title>
          <h5>{props.albumTitle}</h5>
        </Card.Title>
        <Card.Text>{props.artist}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AlbumCard;
