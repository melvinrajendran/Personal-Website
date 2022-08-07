import React, { useEffect } from 'react';
import Title from '../common/titles/Title';
import Experiences from './experiences/Experiences';
import Projects from './projects/Projects.js';

const Work = () => {
  useEffect(() => (document.title = 'Melvin Rajendran | Aspiring Software Engineer | Work'));

  return (
    <>
      <Title title="work" subtitle="A collection of my notable experiences and favorite programming projects." />
      <Experiences />
      <Projects />
    </>
  );
};

export default Work;
