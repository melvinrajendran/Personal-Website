import React, { useEffect } from 'react';
import Title from '../common/titles/Title';
import Coursework from './coursework/Coursework';
import Experiences from './experiences/Experiences';
import Projects from './projects/Projects';

const Work = () => {
  useEffect(() => {
    document.title = 'Melvin Rajendran | Aspiring Software Engineer | Work';
  });

  return (
    <>
      <Title
        title="work"
        subtitle="A collection of my notable experiences, software projects, and coursework."
      />
      <Experiences />
      <Projects />
      <Coursework />
    </>
  );
};

export default Work;
