import React, { useEffect } from 'react';
import FullScreenTitle from '../common/titles/FullScreenTitle';
import AboutMe from './aboutMe/AboutMe';
import Technologies from './technologies/Technologies';

const About = () => {
  useEffect(() => {
    document.title = 'Melvin Rajendran | Aspiring Software Engineer | About';
  });

  return (
    <>
      <FullScreenTitle
        title="hey, i'm melvin."
        subtitle="An aspiring software engineer."
        imageSrc="/images/melvin-portrait.jpg"
        imageAlt="Portrait of Melvin Rajendran"
      />
      <AboutMe />
      <Technologies />
    </>
  );
};

export default About;
