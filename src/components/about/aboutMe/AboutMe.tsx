import React from 'react';
import aboutMeItems from './aboutMeItems';
import AboutMeItem from './AboutMeItem';
import Section from '../../common/Section';

const AboutMe = () => {
  return (
    <Section title="about me">
      {aboutMeItems.map((item, index) => {
        return <AboutMeItem key={index} index={index} {...item} />;
      })}
    </Section>
  );
};

export default AboutMe;
