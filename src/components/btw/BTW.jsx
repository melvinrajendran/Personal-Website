import React, { useEffect } from "react";
import Title from "../titles/Title";
import Blog from "./Blog";

function BTW() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | BTW"));

  return (
    <div>
      <Title title="by the way" subtitle="Other cool things that I'm up to." />
      <Blog />
    </div>
  );
}

export default BTW;
