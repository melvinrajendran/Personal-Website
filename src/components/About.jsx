import React, { useEffect } from "react";
import FullScreenTitle from "./FullScreenTitle";
import portraitImage from "../images/melvin-portrait.jpg";

function About() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | About"));

  return (
    <div>
      <FullScreenTitle title="Hi. I'm Melvin." subtitle="An aspiring software engineer." imageSrc={portraitImage} imageAlt="Melvin Portrait" />
    </div>
  );
}

export default About;
