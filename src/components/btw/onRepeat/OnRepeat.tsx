import React from 'react';
import { Col, Row } from 'react-bootstrap';
import albums from './albums';
import AlbumCard from './AlbumCard';
import Section from '../../common/Section';

const OnRepeat = () => {
  return (
    <Section title="on repeat">
      <Row className="g-4 pt-4">
        {albums.map((album, index) => {
          return (
            <Col key={index} className="d-flex justify-content-center">
              <AlbumCard {...album} />
            </Col>
          );
        })}
      </Row>
    </Section>
  );
};

export default OnRepeat;
