import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../../common/Heading';
import albums from './albums.js';
import AlbumCard from './AlbumCard';

const OnRepeat = () => {
  return (
    <Container className="p-4">
      <Heading text="// on repeat" />
      <Row className="g-4 pt-4">
        {albums.map((album, index) => {
          return (
            <Col key={index} className="d-flex justify-content-center">
              <AlbumCard {...album} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OnRepeat;
