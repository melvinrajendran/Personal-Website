import React from 'react';
import { Card } from 'react-bootstrap';
import './AlbumCard.css';

type AlbumCardProps = {
  songURL: string,
  imageURL: string,
  imageAlt: string,
  albumTitle: string,
  artist: string
}

const AlbumCard = ({
  songURL,
  imageURL,
  imageAlt,
  albumTitle,
  artist
}: AlbumCardProps) => {
  return (
    <Card className="album-card">
      <a href={songURL} target="_blank" rel="noopener noreferrer">
        <Card.Img
          className="rounded shadow"
          variant="top"
          src={imageURL}
          alt={imageAlt}
        />
      </a>
      <Card.Body className="pt-4">
        <Card.Title>
          <h5>
            {albumTitle}
          </h5>
        </Card.Title>
        <Card.Text>
          {artist}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AlbumCard;
