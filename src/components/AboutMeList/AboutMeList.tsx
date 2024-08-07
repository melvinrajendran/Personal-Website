import React, { ReactElement } from 'react';
import AboutMeItem from '../AboutMeItem/AboutMeItem';
import './AboutMeList.scss';

type AboutMeItem = {
  text: ReactElement | string;
  iconClass: string;
};

type AboutMeListProps = {
  items: AboutMeItem[];
};

const AboutMeList = ({ items }: AboutMeListProps) => {
  return (
    <div className="mt-4">
      {items.map((item, index) => {
        return <AboutMeItem key={index} index={index} {...item} />;
      })}
    </div>
  );
};

export default AboutMeList;
