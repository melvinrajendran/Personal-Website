import React from 'react';

type HeadingProps = {
  text: string
};

const Heading = ({
  text
}: HeadingProps) => {
  return <h1 className="display-3 text-center text-lg-start pb-3">{text}</h1>;
};

export default Heading;
