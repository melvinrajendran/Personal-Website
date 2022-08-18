import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AlbumCard from '../AlbumCard/AlbumCard';

type Album = {
  albumURL: string,
  imageURL: string,
  imageAlt: string,
  title: string,
  artist: string
};

type AlbumListProps = {
  items: Album[]
};

const AlbumList = ({
  items
}: AlbumListProps) => {
  return <Row className="g-4 pt-4">
    {items.map((album, index) => {
      return (
        <Col key={index} className="d-flex justify-content-center">
          <AlbumCard {...album} />
        </Col>
      );
    })}
  </Row>;
};

export default AlbumList;