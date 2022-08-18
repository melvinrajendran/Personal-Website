import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Heading/Heading';

type SectionProps = {
  title: string,
  hideTitle?: boolean,
  children: ReactNode
};

const Section = ({
  title,
  hideTitle,
  children
}: SectionProps) => {
  return (
    <Container className="p-3">
      {!hideTitle && <div className="text-center text-lg-start">
        {title && <Heading text={title} />}
      </div>}
      {children}
    </Container>
  );
};

export default Section;