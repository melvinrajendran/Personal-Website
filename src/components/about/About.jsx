import React, { useEffect } from "react";
import FullScreenTitle from "../common/titles/FullScreenTitle";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies.jsx";

function About() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | About"));

  return (
    <div>
      <FullScreenTitle title="hey, i'm melvin." subtitle="An aspiring software engineer." imageSrc={"/images/melvin-portrait.jpg"} imageAlt="Melvin Portrait" />
      <AboutMe />
      <Technologies />
    </div>
  );
}

export default About;
