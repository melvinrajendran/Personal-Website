import React, { useEffect } from "react";
import FullScreenTitle from "../titles/FullScreenTitle";
import portraitImage from "../../images/melvin-portrait.jpg";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";

function About() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | About"));

  return (
    <div>
      <FullScreenTitle title="hey, i'm melvin." subtitle="An aspiring software engineer." imageSrc={portraitImage} imageAlt="Melvin Portrait" />
      <AboutMe />
      <Technologies />
    </div>
  );
}

export default About;
