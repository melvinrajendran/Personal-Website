import React, { useEffect } from 'react';
import FullScreenTitle from '../../components/FullScreenTitle/FullScreenTitle';
import Section from '../../components/Section/Section';
import AboutMeList from '../../components/AboutMeList/AboutMeList';
import aboutMeItems from '../../components/AboutMeList/aboutMeItems';
import SkillList from '../../components/SkillList/SkillList';
import skills from '../../components/SkillList/skills';

const About = () => {
  useEffect(() => {
    document.title = 'Melvin Rajendran | Aspiring Software Engineer | About';
  });

  return (
    <>
      <FullScreenTitle
        title="hey, i'm melvin."
        subtitle="An aspiring software engineer."
        imageSrc="/images/profile/melvin-portrait.jpg"
        imageAlt="Portrait of Melvin Rajendran"
      />
      <Section title="about me">
        <AboutMeList items={aboutMeItems} />
      </Section>
      <Section title="skills">
        <SkillList sections={skills} />
      </Section>
    </>
  );
};

export default About;
