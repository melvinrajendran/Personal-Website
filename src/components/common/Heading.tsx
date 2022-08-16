import { kebabCase } from 'lodash';
import React from 'react';
import './Heading.css';

type HeadingProps = {
  text: string
};

const Heading = ({
  text
}: HeadingProps) => {
  const ref = kebabCase(text);

  return <a href={`#${ref}`}>
    <h1 className="display-4 p-2 mb-3" id={ref}>
      {`// ${text.toLowerCase()}`}
    </h1>
  </a>;
};

export default Heading;
