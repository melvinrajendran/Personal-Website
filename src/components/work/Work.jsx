import React, { useEffect } from "react";
import Title from "../titles/Title";
import Experiences from "./experiences/Experiences";
import Projects from "./projects/Projects.jsx";

function Work() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | Work"));

  return (
    <div>
      <Title title="work" subtitle="A collection of my notable experiences and favorite programming projects." />
      <Experiences />
      <Projects />
    </div>
  );
}

export default Work;
