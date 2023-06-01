import React, { useEffect } from 'react';
import CourseList from '../../components/CourseList/CourseList';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import courses from '../../components/CourseList/courses';
import Timeline from '../../components/Timeline/Timeline';
import experiences from '../../components/Timeline/experiences';
import ProjectList from '../../components/ProjectList/ProjectList';
import projects from '../../components/ProjectCard/projects';

const Work = () => {
  useEffect(() => {
    document.title = 'Melvin Rajendran | Aspiring Software Engineer | Work';
  });

  return (
    <>
      <Title
        title="work"
        subtitle="A collection of my notable experiences, projects, and coursework."
      />
      <Section title="experiences">
        <Timeline items={experiences} />
      </Section>
      <Section title="projects">
        <ProjectList items={projects} />
      </Section>
      <Section title="coursework">
        <CourseList items={courses} />
      </Section>
    </>
  );
};

export default Work;
