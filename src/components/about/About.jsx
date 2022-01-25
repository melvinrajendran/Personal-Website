import React, { useEffect } from "react";
import FullScreenTitle from "../common/titles/FullScreenTitle";
import AboutMe from "./AboutMe.jsx";
import Technologies from "./Technologies.jsx";

const About = () => {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | About"));

  return (
    <>
      <FullScreenTitle title="hey, i'm melvin." subtitle="An aspiring software engineer." imageSrc={"/images/melvin-portrait.jpg"} imageAlt="Melvin Portrait" />
      <AboutMe />
      <Technologies />
    </>
  );
};

export default About;
