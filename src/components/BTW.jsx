import React, { useEffect } from "react";
import Title from "./Title";

function BTW() {
  useEffect(() => (document.title = "Melvin Rajendran | Aspiring Software Engineer | BTW"));

  return (
    <div>
      <Title title="by the way" subtitle="Other cool things that I'm up to." />
    </div>
  );
}

export default BTW;
