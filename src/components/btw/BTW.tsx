import React, { useEffect } from 'react';
import Title from '../common/titles/Title';
import Blog from './blog/Blog';
import OnRepeat from './onRepeat/OnRepeat';

const BTW = () => {
  useEffect(() => {
    document.title = 'Melvin Rajendran | Aspiring Software Engineer | BTW';
  });

  return (
    <>
      <Title
        title="by the way"
        subtitle="Other cool things that I'm up to."
      />
      <Blog />
      <OnRepeat />
    </>
  );
};

export default BTW;
