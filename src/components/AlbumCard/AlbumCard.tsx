import React from 'react';
import { Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import './AlbumCard.scss';

type AlbumCardProps = {
  albumURL: string;
  imageURL: string;
  imageAlt: string;
  title: string;
  artist: string;
};

const AlbumCard = ({ albumURL, imageURL, imageAlt, title, artist }: AlbumCardProps) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <CSSTransition in={inView} timeout={1000} classNames="album">
      <Card ref={ref} className={`${!inView && 'invisible'} album-card`}>
        <a href={albumURL} target="_blank" rel="noopener noreferrer">
          <Card.Img className="rounded shadow" variant="top" src={imageURL} alt={imageAlt} />
        </a>
        <Card.Body className="pt-4">
          <Card.Title>
            <h3 className="h5">{title}</h3>
          </Card.Title>
          <Card.Text>{artist}</Card.Text>
        </Card.Body>
      </Card>
    </CSSTransition>
  );
};

export default AlbumCard;
