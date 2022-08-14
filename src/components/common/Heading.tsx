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
    <h1 className="display-3 text-center text-lg-start pb-3" id={ref}>
      {`// ${text.toLowerCase()}`}
    </h1>
  </a>;
};

export default Heading;
