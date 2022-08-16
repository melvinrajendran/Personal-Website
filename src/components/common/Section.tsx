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
    <Container className="p-3">
      <div className="text-center text-lg-start">
        {title && <Heading text={title} />}
      </div>
      {children && children}
    </Container>
  );
};

export default Section;