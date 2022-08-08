import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../../common/Heading';
import TechnologyList from './TechnologyList';

const Technologies = () => {
  return (
    <Container className="p-4">
      <Heading text="// technologies" />
      <TechnologyList />
    </Container>
  );
};

export default Technologies;
