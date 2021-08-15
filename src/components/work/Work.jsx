import React, { useEffect } from "react";
import Title from "../titles/Title";

function Work() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | Work"));

  return (
    <div>
      <Title title="work" subtitle="A collection of my notable experiences and favorite programming projects." />
    </div>
  );
}

export default Work;
