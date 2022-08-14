import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Heading from './Heading';

type SectionProps = {
  title?: string,
  children?: ReactNode
};

const Section = ({
  title,
  children
}: SectionProps) => {
  return (
    <Container className="p-4">
      {title && <Heading text={`// ${title}`} />}
      {children && children}
    </Container>
  );
};

export default Section;