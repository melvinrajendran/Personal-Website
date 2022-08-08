import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../../common/Heading';
import aboutMeItems from './aboutMeItems';
import AboutMeItem from './AboutMeItem';

const AboutMe = () => {
  return (
    <Container className="p-4">
      <Heading text="// about me" />
      {aboutMeItems.map((item, index) => {
        return <AboutMeItem key={index} {...item} />;
      })}
    </Container>
  );
};

export default AboutMe;
